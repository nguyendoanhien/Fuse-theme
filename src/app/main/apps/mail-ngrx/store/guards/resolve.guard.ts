import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap, catchError, tap, take, filter } from 'rxjs/operators';

import { MailAppState } from 'app/main/apps/mail-ngrx/store/reducers';
import * as fromStore from 'app/main/apps/mail-ngrx/store';
import { getFiltersLoaded, getFoldersLoaded, getLabelsLoaded, getMailsLoaded } from 'app/main/apps/mail-ngrx/store/selectors';
import { getRouterState } from 'app/store/reducers';

@Injectable()
export class ResolveGuard implements CanActivate
{
    routerState: any;

    /**
     * Constructor
     *
     * @param {Store<MailAppState>} _store
     */
    constructor(
        private _store: Store<MailAppState>
    )
    {
        this._store
            .pipe(select(getRouterState))
            .subscribe(routerState => {
                if ( routerState )
                {
                    this.routerState = routerState.state;
                }
            });
    }

    /**
     * Can activate
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<boolean>}
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
    {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    /**
     * Check store
     *
     * @returns {Observable<any>}
     */
    checkStore(): Observable<any>
    {
        return forkJoin(
            this.getFolders(),
            this.getFilters(),
            this.getLabels()
        ).pipe(
            filter(([foldersLoaded, filtersLoaded, labelsLoaded]) => !!(foldersLoaded && filtersLoaded && labelsLoaded)),
            take(1),
            switchMap(() =>
                this.getMails()
            ),
            take(1),
            map(() => this._store.dispatch(new fromStore.SetCurrentMail(this.routerState.params.mailId)))
        );
    }

    /**
     * Get folders
     *
     * @returns {Observable<any>}
     */
    getFolders(): any
    {
        return this._store.pipe(
            select(getFoldersLoaded),
            tap(loaded => {
                if ( !loaded )
                {
                    this._store.dispatch(new fromStore.GetFolders([]));
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }

    /**
     * Get Filters
     *
     * @returns {Observable<any>}
     */
    getFilters(): any
    {
        return this._store.pipe(
            select(getFiltersLoaded),
            tap(loaded => {
                if ( !loaded )
                {
                    this._store.dispatch(new fromStore.GetFilters([]));
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }

    /**
     * Get Labels
     * @returns {Observable<any>}
     */
    getLabels(): any
    {
        return this._store.pipe(
            select(getLabelsLoaded),
            tap(loaded => {
                if ( !loaded )
                {
                    this._store.dispatch(new fromStore.GetLabels([]));
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }

    /**
     * Get Mails
     *
     * @returns {Observable<any>}
     */
    getMails(): any
    {
        return this._store.pipe(
            select(getMailsLoaded),
            tap((loaded: any) => {

                if ( !this.routerState.params[loaded.id] || this.routerState.params[loaded.id] !== loaded.value )
                {
                    this._store.dispatch(new fromStore.GetMails());
                    this._store.dispatch(new fromStore.SetSearchText(''));
                    this._store.dispatch(new fromStore.DeselectAllMails());
                }
            }),
            filter((loaded: any) => {
                return this.routerState.params[loaded.id] && this.routerState.params[loaded.id] === loaded.value;
            }),
            take(1)
        );
    }
}
