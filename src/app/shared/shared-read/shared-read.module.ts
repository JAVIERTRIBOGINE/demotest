import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedReadComponent } from './shared-read.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [SharedReadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SharedReadComponent}]),
    MaterialModule
  ],
  exports: [SharedReadComponent],
})
export class SharedReadModule { }
