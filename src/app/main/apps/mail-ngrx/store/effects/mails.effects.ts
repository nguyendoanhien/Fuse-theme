import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of, forkJoin } from 'rxjs';
import { catchError, debounceTime, map, mergeMap, exhaustMap, withLatestFrom } from 'rxjs/operators';

import { getRouterState, State } from 'app/store/reducers';
import { getMailsState } from 'app/main/apps/mail-ngrx/store/selectors';
import * as MailsActions from 'app/main/apps/mail-ngrx/store/actions/mails.actions';
import * as fromRoot from 'app/store';

import { Mail } from 'app/main/apps/mail-ngrx/mail.model';
import { MailNgrxService } from 'app/main/apps/mail-ngrx/mail.service';

@Injectable()
export class MailsEffect
{
    routerState: any;

    constructor(
        private actions: Actions,
        private mailService: MailNgrxService,
        private store: Store<State>
    )
    {
        this.store
            .pipe(select(getRouterState))
            .subscribe(routerState => {
                if ( routerState )
                {
                    this.routerState = routerState.state;
                }
            });
    }

    /**
     * Get Mails with router parameters
     * @type {Observable<any>}
     */
    @Effect()
    getMails: Observable<MailsActions.MailsActionsAll> =
        this.actions
            .pipe(
                ofType<MailsActions.GetMails>(MailsActions.GET_MAILS),
                exhaustMap((action) => {

                    let handle = {
                        id   : '',
                        value: ''
                    };

                    const routeParams = of('labelHandle', 'filterHandle', 'folderHandle');
                    routeParams.subscribe(param => {
                        if ( this.routerState.params[param] )
                        {
                            handle = {
                                id   : param,
                                value: this.routerState.params[param]
                            };
                        }
                    });

                    return this.mailService.getMails(handle)
                               .pipe(
                                   map((mails: Mail[]) => {

                                       return new MailsActions.GetMailsSuccess({
                                           loaded: handle,
                                           mails : mails
                                       });
                                   }),
                                   catchError(err => of(new MailsActions.GetMailsFailed(err)))
                               );
                })
            );

    /**
     * Update Mail
     * @type {Observable<any>}
     */
    @Effect()
    updateMail: Observable<{}> =
        this.actions
            .pipe(
                ofType<MailsActions.UpdateMail>(MailsActions.UPDATE_MAIL),
                exhaustMap((action) => {
                    return this.mailService.updateMail(action.payload).pipe(
                        map(() => {
                            return new MailsActions.UpdateMailSuccess(action.payload);
                        })
                    );
                })
            );

    /**
     * UpdateMails
     * @type {Observable<any>}
     */
    @Effect()
    updateMails: Observable<MailsActions.MailsActionsAll> =
        this.actions
            .pipe(
                ofType<MailsActions.UpdateMails>(MailsActions.UPDATE_MAILS),
                exhaustMap((action) => {
                    return forkJoin(action.payload.map(mail => this.mailService.updateMail(mail))).pipe(map(() => {
                        return new MailsActions.UpdateMailsSuccess();
                    }));
                })
            );

    /**
     * Set Current Mail
     * @type {Observable<SetCurrentMailSuccess>}
     */
    @Effect()
    setCurrentMail: Observable<Action> =
        this.actions
            .pipe(
                ofType<MailsActions.SetCurrentMail>(MailsActions.SET_CURRENT_MAIL),
                withLatestFrom(this.store.pipe(select(getMailsState))),
                map(([action, state]) => {
                    return new MailsActions.SetCurrentMailSuccess(state.entities[action.payload]);
                })
            );

    /**
     * Check Current Mail
     * Navigate to parent directory if not exist in mail list
     * Update Current Mail if exist in mail list
     * @type {Observable<any>}
     */
    @Effect()
    checkCurrentMail: Observable<Action> =
        this.actions
            .pipe(
                ofType<MailsActions.CheckCurrentMail>(MailsActions.CHECK_CURRENT_MAIL),
                withLatestFrom(this.store.pipe(select(getMailsState))),
                map(([action, state]) => {

                    if ( this.routerState.params.mailId && !state.entities[this.routerState.params.mailId] )
                    {
                        // return new fromRoot.Go({path: [this.routerState.url.replace(this.routerState.params.mailId, '')]});
                    }

                    return new MailsActions.SetCurrentMailSuccess(state.entities[this.routerState.params.mailId]);
                })
            );

    /**
     * On Get Mails Success
     * @type {Observable<CheckCurrentMail>}
     */
    @Effect()
    getMailsSuccess: Observable<MailsActions.MailsActionsAll> =
        this.actions
            .pipe(
                ofType<MailsActions.GetMailsSuccess>(MailsActions.GET_MAILS_SUCCESS),
                mergeMap(() =>
                    [
                        new MailsActions.CheckCurrentMail()
                    ])
            );
    /**
     * On Update Mails Success
     * @type {Observable<DeselectAllMails | GetMails>}
     */
    @Effect()
    updateMailsSuccess: Observable<MailsActions.MailsActionsAll> =
        this.actions
            .pipe(
                ofType<MailsActions.UpdateMailsSuccess>(MailsActions.UPDATE_MAILS_SUCCESS),
                mergeMap(() =>
                    [
                        new MailsActions.DeselectAllMails(),
                        new MailsActions.GetMails()
                    ])
            );
    /**
     * On Update Mail Success
     * @type {Observable<GetMails>}
     */
    @Effect()
    updateMailSuccess: Observable<MailsActions.MailsActionsAll> =
        this.actions
            .pipe(
                ofType<MailsActions.UpdateMailSuccess>(MailsActions.UPDATE_MAIL_SUCCESS),
                debounceTime(500),
                map(() => {
                    return new MailsActions.GetMails();
                })
            );

    /**
     * Set Folder on Selected Mails
     * @type {Observable<UpdateMails>}
     */
    @Effect()
    setFolderOnSelectedMails: Observable<MailsActions.MailsActionsAll> =
        this.actions
            .pipe(
                ofType<MailsActions.SetFolderOnSelectedMails>(MailsActions.SET_FOLDER_ON_SELECTED_MAILS),
                withLatestFrom(
                    this.store.pipe(select(getMailsState))),
                map(([action, state]) => {
                    const entities = {...state.entities};
                    let mailsToUpdate = [];
                    state.selectedMailIds
                         .map(id => {
                             mailsToUpdate = [
                                 ...mailsToUpdate,
                                 entities[id] = {
                                     ...entities[id],
                                     folder: action.payload
                                 }
                             ];
                         });
                    return new MailsActions.UpdateMails(mailsToUpdate);
                })
            );

    /**
     * Add Label on Selected Mails
     * @type {Observable<UpdateMails>}
     */
    @Effect()
    addLabelOnSelectedMails: Observable<MailsActions.MailsActionsAll> =
        this.actions
            .pipe(
                ofType<MailsActions.AddLabelOnSelectedMails>(MailsActions.ADD_LABEL_ON_SELECTED_MAILS),
                withLatestFrom(this.store.pipe(select(getMailsState))),
                map(([action, state]) => {

                    const entities = {...state.entities};
                    let mailsToUpdate = [];

                    state.selectedMailIds
                         .map(id => {

                             let labels = [...entities[id].labels];

                             if ( !entities[id].labels.includes(action.payload) )
                             {
                                 labels = [...labels, action.payload];
                             }

                             mailsToUpdate = [
                                 ...mailsToUpdate,
                                 entities[id] = {
                                     ...entities[id],
                                     labels
                                 }
                             ];
                         });

                    return new MailsActions.UpdateMails(mailsToUpdate);
                })
            );
}
