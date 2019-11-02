import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MailNgrxService } from 'app/main/apps/mail-ngrx/mail.service';
import * as fromStore from 'app/main/apps/mail-ngrx/store';
import { MailNgrxComposeDialogComponent } from 'app/main/apps/mail-ngrx/dialogs/compose/compose.component';

@Component({
    selector       : 'mail-ngrx-main-sidebar',
    templateUrl    : './main-sidebar.component.html',
    styleUrls      : ['./main-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation  : ViewEncapsulation.None
})
export class MailNgrxMainSidebarComponent
{
    labels: any[];
    accounts: object;
    selectedAccount: string;
    dialogRef: any;

    folders$: Observable<any>;
    filters$: Observable<any>;
    labels$: Observable<any>;

    /**
     * Constructor
     *
     * @param {MailNgrxService} _mailNgrxService
     * @param {MatDialog} _matDialog
     * @param {Store<MailAppState>} _store
     */
    constructor(
        private _mailNgrxService: MailNgrxService,
        private _matDialog: MatDialog,
        private _store: Store<fromStore.MailAppState>
    )
    {
        // Set the defaults
        this.accounts = {
            creapond    : 'johndoe@creapond.com',
            withinpixels: 'johndoe@withinpixels.com'
        };
        this.selectedAccount = 'creapond';
        this.folders$ = this._store.pipe(select(fromStore.getFoldersArr));
        this.filters$ = this._store.pipe(select(fromStore.getFiltersArr));
        this.labels$ = this._store.pipe(select(fromStore.getLabelsArr));
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Compose dialog
     */
    composeDialog(): void
    {
        this.dialogRef = this._matDialog.open(MailNgrxComposeDialogComponent, {
            panelClass: 'mail-ngrx-compose-dialog'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }
}
