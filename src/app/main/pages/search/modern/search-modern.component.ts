import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SearchModernService } from 'app/main/pages/search/modern/search-modern.service';

@Component({
    selector     : 'search-modern',
    templateUrl  : './search-modern.component.html',
    styleUrls    : ['./search-modern.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SearchModernComponent implements OnInit, OnDestroy
{
    searchItems: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {SearchModernService} _searchModernService
     */
    constructor(
        private _searchModernService: SearchModernService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._searchModernService.dataOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(searchItems => {
                this.searchItems = searchItems;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
