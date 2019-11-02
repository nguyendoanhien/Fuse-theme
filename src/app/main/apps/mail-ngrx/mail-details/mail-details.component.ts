import { ChangeDetectionStrategy, Component, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Mail } from 'app/main/apps/mail-ngrx/mail.model';
import * as fromStore from 'app/main/apps/mail-ngrx/store';
import { MailNgrxService } from 'app/main/apps/mail-ngrx/mail.service';

@Component({
    selector       : 'mail-ngrx-details',
    templateUrl    : './mail-details.component.html',
    styleUrls      : ['./mail-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation  : ViewEncapsulation.None
})
export class MailNgrxDetailsComponent implements OnChanges
{
    @Input()
    currentMail: Mail;

    labels$: Observable<any>;
    mail: Mail;
    showDetails: boolean;

    /**
     * Constructor
     *
     * @param {MailNgrxService} _mailNgrxService
     * @param {Store<MailAppState>} _store
     */
    constructor(
        private _mailNgrxService: MailNgrxService,
        private _store: Store<fromStore.MailAppState>
    )
    {
        // Set the defaults
        this.labels$ = this._store.pipe(select(fromStore.getLabelsArr));
        this.showDetails = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     */
    ngOnChanges(): void
    {
        this.updateModel(this.currentMail);
        this.markAsRead();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Mark as read
     */
    markAsRead(): void
    {
        if ( this.mail && !this.mail.read )
        {
            this.mail.markRead();
            this.updateMail();
        }
    }

    /**
     * Toggle star
     *
     * @param event
     */
    toggleStar(event): void
    {
        event.stopPropagation();
        this.mail.toggleStar();
        this.updateMail();
    }

    /**
     * Toggle important
     *
     * @param event
     */
    toggleImportant(event): void
    {
        event.stopPropagation();
        this.mail.toggleImportant();
        this.updateMail();
    }

    /**
     * Update model
     *
     * @param data
     */
    updateModel(data): void
    {
        this.mail = !data ? null : new Mail({...data});
    }

    /**
     * Update the mail
     */
    updateMail(): void
    {
        this._store.dispatch(new fromStore.UpdateMail(this.mail));
        this.updateModel(this.mail);
    }
}
