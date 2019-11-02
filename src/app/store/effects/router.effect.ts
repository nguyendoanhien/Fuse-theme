import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';

import * as RouterActions from 'app/store/actions/router.action';

@Injectable()
export class RouterEffects
{
    /**
     * Constructor
     *
     * @param {Actions} actions$
     * @param {Router} router
     * @param {Location} location
     */
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    )
    {
    }

    /**
     * Navigate
     */
    @Effect({dispatch: false})
    navigate$ = this.actions$.pipe(
        ofType(RouterActions.GO),
        map((action: RouterActions.Go) => action.payload),
        tap(({path, query: queryParams, extras}) => {
            this.router.navigate(path, {...queryParams, ...extras});
        })
    );

    /**
     * Navigate back
     * @type {Observable<any>}
     */
    @Effect({dispatch: false})
    navigateBack$ = this.actions$.pipe(
        ofType(RouterActions.BACK),
        tap(() => this.location.back())
    );

    /**
     * Navigate forward
     * @type {Observable<any>}
     */
    @Effect({dispatch: false})
    navigateForward$ = this.actions$.pipe(
        ofType(RouterActions.FORWARD),
        tap(() => this.location.forward())
    );
}
