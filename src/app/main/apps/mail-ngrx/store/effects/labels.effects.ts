import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as LabelsActions from '../actions/labels.actions';
import { MailNgrxService } from 'app/main/apps/mail-ngrx/mail.service';

@Injectable()
export class LabelsEffect
{
    constructor(
        private actions: Actions,
        private mailService: MailNgrxService
    )
    {
    }

    /**
     * Get Labels from Server
     * @type {Observable<any>}
     */
    @Effect()
    getLabels: Observable<LabelsActions.LabelsActionsAll> =
        this.actions
            .pipe(
                ofType<LabelsActions.GetLabels>(LabelsActions.GET_LABELS),
                switchMap((action) => {
                        return this.mailService.getLabels()
                                   .pipe(
                                       map((labels: any) => {
                                           return new LabelsActions.GetLabelsSuccess(labels);
                                       }),
                                       catchError(err => of(new LabelsActions.GetLabelsFailed(err)))
                                   );
                    }
                ));
}
