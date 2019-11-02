import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { KnowledgeBaseService } from 'app/main/pages/knowledge-base/knowledge-base.service';
import { KnowledgeBaseArticleComponent } from 'app/main/pages/knowledge-base/dialogs/article/article.component';

@Component({
    selector     : 'knowledge-base',
    templateUrl  : './knowledge-base.component.html',
    styleUrls    : ['./knowledge-base.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class KnowledgeBaseComponent implements OnInit, OnDestroy
{
    knowledgeBase: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {KnowledgeBaseService} _knowledgeBaseService
     * @param {MatDialog} _matDialog
     */
    constructor(
        private _knowledgeBaseService: KnowledgeBaseService,
        private _matDialog: MatDialog
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
        this._knowledgeBaseService.onKnowledgeBaseChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(response => {
                this.knowledgeBase = response;
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
     * Read article
     *
     * @param article
     */
    readArticle(article): void
    {
        this._matDialog.open(KnowledgeBaseArticleComponent, {
            panelClass: 'knowledgebase-article-dialog',
            data      : {article: article}
        });
    }
}
