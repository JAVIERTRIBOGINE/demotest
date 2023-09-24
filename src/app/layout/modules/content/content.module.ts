import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';


@NgModule({
  declarations: [ ContentComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [ RouterModule, ContentComponent ],
})
export class ContentModule { }
