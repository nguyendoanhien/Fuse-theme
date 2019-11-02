import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector     : 'knowledge-base-article',
    templateUrl  : './article.component.html',
    styleUrls    : ['./article.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class KnowledgeBaseArticleComponent
{
    /**
     * Constructor
     *
     * @param {MatDialogRef<KnowledgeBaseArticleComponent>} matDialogRef
     * @param _data
     */
    constructor(
        public matDialogRef: MatDialogRef<KnowledgeBaseArticleComponent>,
        @Inject(MAT_DIALOG_DATA) public _data: any
    )
    {
    }
}
