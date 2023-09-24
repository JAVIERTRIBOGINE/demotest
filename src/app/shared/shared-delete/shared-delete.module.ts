import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SharedDeleteComponent } from './shared-delete.component';


@NgModule({
  declarations: [ SharedDeleteComponent],
  exports: [ SharedDeleteComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedDeleteModule { }
