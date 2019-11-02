import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components/index';

import { FuseConfigServiceDocsComponent } from 'app/main/documentation/services/fuse-config/fuse-config.component';
import { FuseSplashScreenServiceDocsComponent } from 'app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component';

const routes = [
    {
        path     : 'fuse-config',
        component: FuseConfigServiceDocsComponent
    },
    {
        path     : 'fuse-splash-screen',
        component: FuseSplashScreenServiceDocsComponent
    }
];

@NgModule({
    declarations: [
        FuseConfigServiceDocsComponent,
        FuseSplashScreenServiceDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule,
        FuseHighlightModule
    ]
})

export class ServicesModule
{
}
