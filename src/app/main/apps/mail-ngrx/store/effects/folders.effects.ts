import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as FoldersActions from 'app/main/apps/mail-ngrx/store/actions/folders.actions';
import { MailNgrxService } from 'app/main/apps/mail-ngrx/mail.service';

@Injectable()
export class FoldersEffect
{
    constructor(
        private actions: Actions,
        private mailService: MailNgrxService
    )
    {
    }

    /**
     * Get Folders from Server
     * @type {Observable<any>}
     */
    @Effect()
    getFolders: Observable<FoldersActions.FoldersActionsAll> =
        this.actions
            .pipe(
                ofType<FoldersActions.GetFolders>(FoldersActions.GET_FOLDERS),
                switchMap((action) => {
                        return this.mailService.getFolders()
                                   .pipe(
                                       map((folders: any) => {
                                           return new FoldersActions.GetFoldersSuccess(folders);
                                       }),
                                       catchError(err => of(new FoldersActions.GetFoldersFailed(err)))
                                   );
                    }
                ));
}
