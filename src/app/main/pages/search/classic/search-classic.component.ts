import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SearchClassicService } from 'app/main/pages/search/classic/search-classic.service';

@Component({
    selector     : 'search-classic',
    templateUrl  : './search-classic.component.html',
    styleUrls    : ['./search-classic.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SearchClassicComponent implements OnInit, OnDestroy
{
    searchItems: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {SearchClassicService} _searchClassicService
     */
    constructor(
        private _searchClassicService: SearchClassicService
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
        this._searchClassicService.dataOnChanged
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
