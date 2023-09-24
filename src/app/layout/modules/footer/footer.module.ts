import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MaterialModule } from '../../../core/material/material.module';



@NgModule({
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class FooterModule { }
