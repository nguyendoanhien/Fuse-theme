import { Component } from '@angular/core';

@Component({
    selector   : 'file-manager-main-sidebar',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class FileManagerMainSidebarComponent
{
    selected: any;

    constructor()
    {
    }
}
