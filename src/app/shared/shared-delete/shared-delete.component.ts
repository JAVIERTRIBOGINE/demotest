import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiV1Service } from 'src/app/core/services/api-v1.service';

@Component({
  selector: 'app-shared-delete',
  templateUrl: './shared-delete.component.html',
  styleUrls: ['./shared-delete.component.scss']
})
export class SharedDeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SharedDeleteComponent>,
  ){}

  close(ev: boolean){
    this.dialogRef.close(ev);

  }
}
