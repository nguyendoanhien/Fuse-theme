import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

import { fuseAnimations } from '@fuse/animations/index';
import { FuseCopierService } from '@fuse/services/copier.service';

import { EXAMPLE_COMPONENTS } from 'app/main/angular-material-elements/example-components';

export interface LiveExample
{
    title: string;
    component: any;
    additionalFiles?: string[];
    selectorName?: string;
}

@Component({
    selector     : 'example-viewer',
    templateUrl  : './example-viewer.html',
    styleUrls    : ['./example-viewer.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ExampleViewerComponent implements AfterViewInit, OnDestroy
{
    _example: string;
    exampleData: LiveExample;
    showSource: boolean;
    previewRef: ComponentRef<any>;
    selectedIndex: number;

    @ViewChild('previewContainer', {read: ViewContainerRef, static: false})
    private _previewContainer: ViewContainerRef;

    /**
     * Constructor
     *
     * @param {MatSnackBar} _matSnackBar
     * @param {FuseCopierService} _fuseCopierService
     * @param {ComponentFactoryResolver} _componentFactoryResolver
     */
    constructor(
        private _matSnackBar: MatSnackBar,
        private _fuseCopierService: FuseCopierService,
        private _componentFactoryResolver: ComponentFactoryResolver
    )
    {
        // Set the defaults
        this.selectedIndex = 0;
        this.showSource = false;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Container
     *
     * @param {ViewContainerRef} value
     */
    set container(value: ViewContainerRef)
    {
        this._previewContainer = value;
    }

    get container(): ViewContainerRef
    {
        return this._previewContainer;
    }

    /**
     * Example
     *
     * @param {string} example
     */
    @Input()
    set example(example: string)
    {
        if ( example && EXAMPLE_COMPONENTS[example] )
        {
            this._example = example;
            this.exampleData = EXAMPLE_COMPONENTS[example];
        }
        else
        {
            console.log('MISSING EXAMPLE: ', example);
        }
    }

    get example(): string
    {
        return this._example;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        setTimeout(() => {
            const cmpFactory = this._componentFactoryResolver.resolveComponentFactory(this.exampleData.component);
            this.previewRef = this._previewContainer.createComponent(cmpFactory);
        }, 0);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        if ( this.previewRef )
        {
            this.previewRef.destroy();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle source view
     */
    toggleSourceView(): void
    {
        this.showSource = !this.showSource;
    }

    /**
     * Copy the source
     *
     * @param {string} text
     */
    copySource(text: string): void
    {
        if ( this._fuseCopierService.copyText(text) )
        {
            this._matSnackBar.open('Code copied', '', {duration: 2500});
        }
        else
        {
            this._matSnackBar.open('Copy failed. Please try again!', '', {duration: 2500});
        }
    }
}
