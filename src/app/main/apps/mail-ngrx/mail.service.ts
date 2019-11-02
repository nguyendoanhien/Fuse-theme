import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Mail } from 'app/main/apps/mail-ngrx/mail.model';
import { MailAppState } from 'app/main/apps/mail-ngrx/store/reducers';
import { getFiltersArr, getFoldersArr, getLabelsArr, getMailsArr } from 'app/main/apps/mail-ngrx/store/selectors';

@Injectable()
export class MailNgrxService
{
    foldersArr: any;
    filtersArr: any;
    labelsArr: any;
    selectedMails: Mail[];
    mails: Mail[];

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     * @param {Store<MailAppState>} _store
     */
    constructor(
        private _httpClient: HttpClient,
        private _store: Store<MailAppState>
    )
    {
        this._store
            .pipe(select(getFoldersArr))
            .subscribe(folders => {
                this.foldersArr = folders;
            });

        this._store
            .pipe(select(getFiltersArr))
            .subscribe(filters => {
                this.filtersArr = filters;
            });

        this._store
            .pipe(select(getLabelsArr))
            .subscribe(labels => {
                this.labelsArr = labels;
            });

        this._store
            .pipe(select(getMailsArr))
            .subscribe(mails => {
                this.mails = mails;
            });

        this.selectedMails = [];
    }

    /**
     * Get all mails
     *
     * @returns {Observable<Mail[]>}
     */
    getAllMails(): Observable<Mail[]>
    {
        return this._httpClient.get<Mail[]>('api/mail-mails');
    }

    /**
     * Get folders
     *
     * @returns {Observable<any>}
     */
    getFolders(): Observable<any>
    {
        return this._httpClient.get('api/mail-folders');
    }

    /**
     * Get filters
     *
     * @returns {Observable<any>}
     */
    getFilters(): Observable<any>
    {
        return this._httpClient.get('api/mail-filters');
    }

    /**
     * Get labels
     *
     * @returns {Observable<any>}
     */
    getLabels(): Observable<any>
    {
        return this._httpClient.get('api/mail-labels');
    }

    /**
     * Get mails
     *
     * @param handle
     * @returns {Observable<Mail[]>}
     */
    getMails(handle): Observable<Mail[]>
    {
        if ( handle.id === 'labelHandle' )
        {
            const labelId = this.labelsArr.find(label => label.handle === handle.value).id;
            return this._httpClient.get<Mail[]>('api/mail-mails?labels=' + labelId);
        }
        else if ( handle.id === 'filterHandle' )
        {
            return this._httpClient.get<Mail[]>('api/mail-mails?' + handle.value + '=true');
        }
        else // folderHandle
        {
            const folderId = this.foldersArr.find(folder => folder.handle === handle.value).id;
            return this._httpClient.get<any>('api/mail-mails?folder=' + folderId);
        }
    }

    /**
     * Update the mail
     *
     * @param mail
     * @returns {Promise<any>}
     */
    updateMail(mail): any
    {
        return this._httpClient.post('api/mail-mails/' + mail.id, {...mail});
    }
}
