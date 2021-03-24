/**
 * @license
 * Copyright ASW (A Software World) All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Constants } from '../../../common/constants';
import { ConfirmDialogComponent } from '../../../shared-components/confirm-dialog/confirm-dialog.component';
import { EditDrawingComponent } from '../../edit-controls/edit-drawing/edit-drawing.component';

@Component({
    selector: 'asw-drawing',
    templateUrl: './drawing.component.html'
})
export class DrawingComponent {

    constants: any = Constants;

    @Input() control: any;

    @Input() controlIndex: number;
    @Input() isPreviewTemplate = true;

    @Output() drawingUpdateEvent = new EventEmitter<{ control: any, index: number }>();
    @Output() drawingDeleteEvent = new EventEmitter<number>();
    imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    constructor(public dialog: MatDialog) { }

    deleteDrawingDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '350px',
            data: { name: control.label, message: this.constants.messages.waringMessage }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.drawingDeleteEvent.emit(controlIndex);
            }
        });
    }

    editDrawingDialog(control: any, controlIndex: number): void {
        const dialogRef = this.dialog.open(EditDrawingComponent, {
            disableClose: true,
            width: '744px',
            data: control
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                this.drawingUpdateEvent.emit({ control: result, index: controlIndex });
            }
        });
    }
}
