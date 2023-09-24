import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedReadModule } from './shared-read/shared-read.module';
import { SharedFormModule } from './shared-form/shared-form.module';
import { SharedDeleteModule } from './shared-delete/shared-delete.module';

const DECLARATIONS = [
  SharedReadModule,
  SharedFormModule,
  SharedDeleteModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedReadModule,
    SharedFormModule,
    SharedDeleteModule
  ],
  exports: [  SharedReadModule,
    SharedFormModule,
    SharedDeleteModule]
})
export class SharedModule { }
