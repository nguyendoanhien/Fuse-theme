import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MailNgrxService } from '../../mail.service';
import { Mail } from '../../mail.model';
import * as fromStore from '../../store';

@Component({
    selector       : 'mail-ngrx-list-item',
    templateUrl    : './mail-list-item.component.html',
    styleUrls      : ['./mail-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation  : ViewEncapsulation.None
})
export class MailNgrxListItemComponent implements OnInit
{
    @Input() mail: Mail;
    @HostBinding('class.selected') selected: boolean;
    @HostBinding('class.unread') unread: boolean;
    labels$: Observable<any>;
    selectedMailIds$: Observable<any>;

    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {MailNgrxService} _mailNgrxService
     * @param {Store} _store
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _mailNgrxService: MailNgrxService,
        private _store: Store<fromStore.MailAppState>
    )
    {
        this.labels$ = this._store.pipe(select(fromStore.getLabelsArr));
        this.selectedMailIds$ = this._store.pipe(select(fromStore.getSelectedMailIds));
        this.selected = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void
    {
        // Set the initial values
        this.mail = new Mail(this.mail);
        this.unread = !this.mail.read;

        this.selectedMailIds$.subscribe((selectedMailIds) => {
            this.selected = selectedMailIds.length > 0 && selectedMailIds.find(id => id === this.mail.id) !== undefined;
            this.refresh();
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    refresh(): void
    {
        this._changeDetectorRef.markForCheck();
    }

    onSelectedChange(): void
    {
        this._store.dispatch(new fromStore.ToggleInSelectedMails(this.mail.id));
    }
}
