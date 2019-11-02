import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector   : 'icons',
    templateUrl: './icons.component.html',
    styleUrls  : ['./icons.component.scss']
})
export class IconsComponent implements OnInit, OnDestroy
{
    icons: any[];
    filteredIcons: any[];
    loading: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.loading = true;

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
        this._httpClient.get('api/icons')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((icons: any) => {
                this.icons = icons;
                this.filteredIcons = this.icons;
                this.loading = false;
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter icons
     *
     * @param event
     */
    filterIcons(event): void
    {
        const value = event.target.value;

        this.filteredIcons = this.icons.filter(icon => {
            return icon.name.includes(value) || icon.tags.includes(value);
        });
    }
}
