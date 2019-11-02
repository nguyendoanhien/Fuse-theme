import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector     : 'scrumboard-board-add-list',
    templateUrl  : './add-list.component.html',
    styleUrls    : ['./add-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrumboardBoardAddListComponent
{
    formActive: boolean;
    form: FormGroup;

    @Output()
    listAdded: EventEmitter<any>;

    @ViewChild('nameInput', {static: false})
    nameInputField;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.formActive = false;
        this.listAdded = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open form
     */
    openForm(): void
    {
        this.form = this._formBuilder.group({
            name: ['']
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
            this.listAdded.next(this.form.getRawValue().name);
            this.formActive = false;
        }
    }

}
