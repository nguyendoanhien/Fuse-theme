import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Mail } from 'app/main/apps/mail-ngrx/mail.model';
import { MailNgrxService } from 'app/main/apps/mail-ngrx/mail.service';

@Component({
    selector       : 'mail-ngrx-list',
    templateUrl    : './mail-list.component.html',
    styleUrls      : ['./mail-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation  : ViewEncapsulation.None
})
export class MailNgrxListComponent
{
    @Input()
    mails: Mail[];

    @Input()
    currentMail: Mail[];

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {MailNgrxService} _mailNgrxService
     * @param {Router} _router
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _mailNgrxService: MailNgrxService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Read mail
     *
     * @param mailId
     */
    readMail(mailId): void
    {
        const labelHandle  = this._activatedRoute.snapshot.params.labelHandle,
              filterHandle = this._activatedRoute.snapshot.params.filterHandle,
              folderHandle = this._activatedRoute.snapshot.params.folderHandle;

        if ( labelHandle )
        {
            this._router.navigate(['apps/mail-ngrx/label/' + labelHandle + '/' + mailId]);
        }
        else if ( filterHandle )
        {
            this._router.navigate(['apps/mail-ngrx/filter/' + filterHandle + '/' + mailId]);
        }
        else
        {
            this._router.navigate(['apps/mail-ngrx/' + folderHandle + '/' + mailId]);
        }
    }
}
