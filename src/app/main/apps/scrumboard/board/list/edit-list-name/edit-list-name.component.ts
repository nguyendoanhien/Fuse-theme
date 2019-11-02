import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector     : 'scrumboard-board-edit-list-name',
    templateUrl  : './edit-list-name.component.html',
    styleUrls    : ['./edit-list-name.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ScrumboardBoardEditListNameComponent
{
    formActive: boolean;
    form: FormGroup;

    @Input()
    list;

    @Output()
    listNameChanged: EventEmitter<any>;

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
        this.listNameChanged = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open the form
     */
    openForm(): void
    {
        this.form = this._formBuilder.group({
            name: [this.list.name]
        });
        this.formActive = true;
        this.focusNameField();
    }

    /**
     * Close the form
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
            this.list.name = this.form.getRawValue().name;
            this.listNameChanged.next(this.list.name);
            this.formActive = false;
        }
    }
}
