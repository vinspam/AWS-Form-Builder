/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AswConfirmDialog } from '@asoftwareworld/form-builder/form-control/confirm-dialog';
import { Constants } from '@asoftwareworld/form-builder/form-control/core';
import { TextareaControl } from './textarea-control';
import { AswTextareaDialog } from './textarea-dialog';

@Component({
    selector: 'asw-textarea',
    templateUrl: './textarea.html'
})
export class AswTextarea {

    constants: any = Constants;
    /**
     * TextArea control
     */
    @Input() control: TextareaControl | null = null;

    /**
     * TextArea control index to help update or delete button from drop area
     */
    @Input() controlIndex!: number;
    @Input() isPreviewTemplate = false;

    @Output() textAreaUpdateEvent = new EventEmitter<{control: TextareaControl, index: number}>();
    @Output() textAreaDeleteEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }

    deleteTextAreaDialog(control: TextareaControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswConfirmDialog, {
            width: '350px',
            data: { name: control.name, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.textAreaDeleteEvent.emit(controlIndex);
            }
        });
    }

    editTextAreaDialog(control: TextareaControl, controlIndex: number): void {
        const dialogRef = this.dialog.open(AswTextareaDialog, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.textAreaUpdateEvent.emit({control: result, index: controlIndex});
            }
        });
    }
}
