import { Component, ViewEncapsulation } from '@angular/core';
import * as shape from 'd3-shape';

import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'cards',
    templateUrl  : './cards.component.html',
    styleUrls    : ['./cards.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class CardsComponent
{
    view: string;
    card9Expanded: boolean;
    card10Expanded: boolean;
    card19: any;
    card24: any;
    card25: any;
    card26: any;

    constructor()
    {
        // Set the defaults
        this.view = 'preview';

        this.card9Expanded = false;
        this.card10Expanded = false;
        this.card19 = {
            scheme: {
                domain: ['#5c84f1']
            },
            data  : [
                {
                    name  : 'GOOG',
                    series: [
                        {
                            name : 'Jan 1',
                            value: 540.2
                        },
                        {
                            name : 'Jan 2',
                            value: 539.4
                        },
                        {
                            name : 'Jan 3',
                            value: 538.9
                        },
                        {
                            name : 'Jan 4',
                            value: 539.6
                        },
                        {
                            name : 'Jan 5',
                            value: 540
                        },
                        {
                            name : 'Jan 6',
                            value: 540.2
                        },
                        {
                            name : 'Jan 7',
                            value: 540.48
                        }
                    ]
                }
            ],
            curve : shape.curveBasis
        };

        this.card24 = {
            scheme : {
                domain: ['#4867d2', '#5c84f1', '#89a9f4']
            },
            devices: [
                {
                    name  : 'Desktop',
                    value : 92.8,
                    change: -0.6
                },
                {
                    name  : 'Mobile',
                    value : 6.1,
                    change: 0.7
                },
                {
                    name  : 'Tablet',
                    value : 1.1,
                    change: 0.1
                }
            ]
        };

        this.card25 = {
            scheme: {
                domain: ['#5c84f1']
            },
            data  : [
                {
                    name : 'Monday',
                    value: 221
                },
                {
                    name : 'Tuesday',
                    value: 428
                },
                {
                    name : 'Wednesday',
                    value: 492
                },
                {
                    name : 'Thursday',
                    value: 471
                },
                {
                    name : 'Friday',
                    value: 413
                },
                {
                    name : 'Saturday',
                    value: 344
                },
                {
                    name : 'Sunday',
                    value: 294
                }
            ]
        };

        this.card26 = {
            scheme: {
                domain: ['#5c84f1']
            },
            data  : [
                {
                    name  : 'Impressions',
                    series: [
                        {
                            name : 'Jan 1',
                            value: 670000
                        },
                        {
                            name : 'Jan 2',
                            value: 540000
                        },
                        {
                            name : 'Jan 3',
                            value: 820000
                        },
                        {
                            name : 'Jan 4',
                            value: 570000
                        },
                        {
                            name : 'Jan 5',
                            value: 720000
                        },
                        {
                            name : 'Jan 6',
                            value: 570000
                        },
                        {
                            name : 'Jan 7',
                            value: 870000
                        },
                        {
                            name : 'Jan 8',
                            value: 720000
                        },
                        {
                            name : 'Jan 9',
                            value: 890000
                        },
                        {
                            name : 'Jan 10',
                            value: 987000
                        },
                        {
                            name : 'Jan 11',
                            value: 1120000
                        },
                        {
                            name : 'Jan 12',
                            value: 1360000
                        },
                        {
                            name : 'Jan 13',
                            value: 1100000
                        },
                        {
                            name : 'Jan 14',
                            value: 1490000
                        },
                        {
                            name : 'Jan 15',
                            value: 980000
                        }
                    ]
                }
            ],
            curve : shape.curveBasis
        };

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the view
     */
    toggleView(): void
    {
        if ( this.view === 'preview' )
        {
            this.view = 'source';
        }
        else
        {
            this.view = 'preview';
        }
    }
}
