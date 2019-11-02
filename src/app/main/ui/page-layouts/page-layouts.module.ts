import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';

import { CardedFullWidth1Component } from 'app/main/ui/page-layouts/carded/full-width-1/full-width-1.component';
import { CardedFullWidth2Component } from 'app/main/ui/page-layouts/carded/full-width-2/full-width-2.component';
import { CardedFullWidthTabbed1Component } from 'app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component';
import { CardedFullWidthTabbed2Component } from 'app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component';
import { CardedLeftSidebar1Component } from 'app/main/ui/page-layouts/carded/left-sidebar-1/left-sidebar-1.component';
import { CardedLeftSidebar2Component } from 'app/main/ui/page-layouts/carded/left-sidebar-2/left-sidebar-2.component';
import { CardedLeftSidebarTabbed1Component } from 'app/main/ui/page-layouts/carded/left-sidebar-tabbed-1/left-sidebar-tabbed-1.component';
import { CardedLeftSidebarTabbed2Component } from 'app/main/ui/page-layouts/carded/left-sidebar-tabbed-2/left-sidebar-tabbed-2.component';
import { CardedRightSidebar1Component } from 'app/main/ui/page-layouts/carded/right-sidebar-1/right-sidebar-1.component';
import { CardedRightSidebar2Component } from 'app/main/ui/page-layouts/carded/right-sidebar-2/right-sidebar-2.component';
import { CardedRightSidebarTabbed1Component } from 'app/main/ui/page-layouts/carded/right-sidebar-tabbed-1/right-sidebar-tabbed-1.component';
import { CardedRightSidebarTabbed2Component } from 'app/main/ui/page-layouts/carded/right-sidebar-tabbed-2/right-sidebar-tabbed-2.component';
import { SimpleFullWidth1Component } from 'app/main/ui/page-layouts/simple/full-width-1/full-width-1.component';
import { SimpleFullWidthTabbed1Component } from 'app/main/ui/page-layouts/simple/full-width-tabbed-1/full-width-tabbed-1.component';
import { SimpleLeftSidebar1Component } from 'app/main/ui/page-layouts/simple/left-sidebar-1/left-sidebar-1.component';
import { SimpleLeftSidebar2Component } from 'app/main/ui/page-layouts/simple/left-sidebar-2/left-sidebar-2.component';
import { SimpleLeftSidebar3Component } from 'app/main/ui/page-layouts/simple/left-sidebar-3/left-sidebar-3.component';
import { SimpleLeftSidebar4Component } from 'app/main/ui/page-layouts/simple/left-sidebar-4/left-sidebar-4.component';
import { SimpleRightSidebar1Component } from 'app/main/ui/page-layouts/simple/right-sidebar-1/right-sidebar-1.component';
import { SimpleRightSidebar2Component } from 'app/main/ui/page-layouts/simple/right-sidebar-2/right-sidebar-2.component';
import { SimpleRightSidebar3Component } from 'app/main/ui/page-layouts/simple/right-sidebar-3/right-sidebar-3.component';
import { SimpleRightSidebar4Component } from 'app/main/ui/page-layouts/simple/right-sidebar-4/right-sidebar-4.component';
import { BlankComponent } from 'app/main/ui/page-layouts/blank/blank.component';

import { FuseSidebarModule } from '@fuse/components';

const routes: Routes = [
    // Carded
    {
        path     : 'page-layouts/carded/full-width-1',
        component: CardedFullWidth1Component
    },
    {
        path     : 'page-layouts/carded/full-width-2',
        component: CardedFullWidth2Component
    },
    {
        path     : 'page-layouts/carded/full-width-tabbed-1',
        component: CardedFullWidthTabbed1Component
    },
    {
        path     : 'page-layouts/carded/full-width-tabbed-2',
        component: CardedFullWidthTabbed2Component
    },
    {
        path     : 'page-layouts/carded/left-sidebar-1',
        component: CardedLeftSidebar1Component
    },
    {
        path     : 'page-layouts/carded/left-sidebar-tabbed-1',
        component: CardedLeftSidebarTabbed1Component
    },
    {
        path     : 'page-layouts/carded/left-sidebar-2',
        component: CardedLeftSidebar2Component
    },
    {
        path     : 'page-layouts/carded/left-sidebar-tabbed-2',
        component: CardedLeftSidebarTabbed2Component
    },
    {
        path     : 'page-layouts/carded/right-sidebar-1',
        component: CardedRightSidebar1Component
    },
    {
        path     : 'page-layouts/carded/right-sidebar-tabbed-1',
        component: CardedRightSidebarTabbed1Component
    },
    {
        path     : 'page-layouts/carded/right-sidebar-2',
        component: CardedRightSidebar2Component
    },
    {
        path     : 'page-layouts/carded/right-sidebar-tabbed-2',
        component: CardedRightSidebarTabbed2Component
    },
    // Simple
    {
        path     : 'page-layouts/simple/full-width-1',
        component: SimpleFullWidth1Component
    },
    {
        path     : 'page-layouts/simple/full-width-tabbed-1',
        component: SimpleFullWidthTabbed1Component
    },
    {
        path     : 'page-layouts/simple/left-sidebar-1',
        component: SimpleLeftSidebar1Component
    },
    {
        path     : 'page-layouts/simple/left-sidebar-2',
        component: SimpleLeftSidebar2Component
    },
    {
        path     : 'page-layouts/simple/left-sidebar-3',
        component: SimpleLeftSidebar3Component
    },
    {
        path     : 'page-layouts/simple/left-sidebar-4',
        component: SimpleLeftSidebar4Component
    },
    {
        path     : 'page-layouts/simple/right-sidebar-1',
        component: SimpleRightSidebar1Component
    },
    {
        path     : 'page-layouts/simple/right-sidebar-2',
        component: SimpleRightSidebar2Component
    },
    {
        path     : 'page-layouts/simple/right-sidebar-3',
        component: SimpleRightSidebar3Component
    },
    {
        path     : 'page-layouts/simple/right-sidebar-4',
        component: SimpleRightSidebar4Component
    },
    // Blank
    {
        path     : 'page-layouts/blank',
        component: BlankComponent
    }
];

@NgModule({
    declarations: [
        CardedFullWidth1Component,
        CardedFullWidth2Component,
        CardedFullWidthTabbed1Component,
        CardedFullWidthTabbed2Component,
        CardedLeftSidebar1Component,
        CardedLeftSidebar2Component,
        CardedLeftSidebarTabbed1Component,
        CardedLeftSidebarTabbed2Component,
        CardedRightSidebar1Component,
        CardedRightSidebar2Component,
        CardedRightSidebarTabbed1Component,
        CardedRightSidebarTabbed2Component,
        SimpleFullWidth1Component,
        SimpleFullWidthTabbed1Component,
        SimpleLeftSidebar1Component,
        SimpleLeftSidebar2Component,
        SimpleLeftSidebar3Component,
        SimpleLeftSidebar4Component,
        SimpleRightSidebar1Component,
        SimpleRightSidebar2Component,
        SimpleRightSidebar3Component,
        SimpleRightSidebar4Component,
        BlankComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatTabsModule,

        FuseSidebarModule,
        FuseSharedModule,
        FuseDemoModule
    ]
})
export class UIPageLayoutsModule
{
}
