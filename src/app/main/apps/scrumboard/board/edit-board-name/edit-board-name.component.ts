import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector     : 'scrumboard-edit-board-name',
    templateUrl  : './edit-board-name.component.html',
    styleUrls    : ['./edit-board-name.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrumboardEditBoardNameComponent
{
    formActive: boolean;
    form: FormGroup;

    @Input()
    board;

    @Output()
    boardNameChanged: EventEmitter<any>;

    @ViewChild('nameInput', {static: false})
    nameInputField;

    constructor(
        private formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.formActive = false;
        this.boardNameChanged = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open form
     */
    openForm(): void
    {
        this.form = this.formBuilder.group({
            name: [this.board.name]
        });
        this.formActive = true;
        this.focusNameField();
    }

    /**
     * Close form
     */
    closeForm(): void
    {
        this.formActive = false;
    }

    /**
     * Focus to the name field
     */
    focusNameField(): void
    {
        setTimeout(() => {
            this.nameInputField.nativeElement.focus();
        });
    }

    /**
     * On form submit
     */
    onFormSubmit(): void
    {
        if ( this.form.valid )
        {
            this.board.name = this.form.getRawValue().name;
            this.board.uri = encodeURIComponent(this.board.name).replace(/%20/g, '-').toLowerCase();

            this.boardNameChanged.next(this.board.name);
            this.formActive = false;
        }
    }
}
