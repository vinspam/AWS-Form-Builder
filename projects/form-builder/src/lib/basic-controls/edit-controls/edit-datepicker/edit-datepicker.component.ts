import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'asw-edit-datepicker',
  templateUrl: './edit-datepicker.component.html'
})
export class EditDatepickerComponent implements OnInit {

    aswEditPropertyForm: FormGroup;
    status: boolean;
    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<EditDatepickerComponent>,
                @Inject(MAT_DIALOG_DATA) public control: any) { }

    ngOnInit(): void {
        this.validateFormBuilder();
        this.editProperty(this.control);
    }

    validateFormBuilder(): void {
        this.aswEditPropertyForm = this.formBuilder.group({
            tooltip: ['', [Validators.required]],
            placeholder: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
            name: ['', [Validators.required]],
            style: ['', [Validators.required]],
            isRequired: [false]
        });
    }

    editProperty(control: any): void {
        this.aswEditPropertyForm.setValue({
            tooltip: control.tooltip,
            placeholder: control.placeholder,
            name: control.name,
            style: control.style,
            isRequired: control.isRequired
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        this.aswEditPropertyForm.value.displayName = this.control.displayName;
        this.aswEditPropertyForm.value.controlType = this.control.controlType;
        this.dialogRef.close(this.aswEditPropertyForm.value);
    }

    onChange(event: any): void {
        if (event.checked) {
            this.status = true;
        } else {
            this.status = false;
        }
    }
}
