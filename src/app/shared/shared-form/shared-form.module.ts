import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { SharedFormComponent } from './shared-form.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';
import { UppercaseDirective } from 'src/app/core/directives/uppercase.directive';



@NgModule({
  declarations: [SharedFormComponent, UppercaseDirective],
  exports: [SharedFormComponent],
  imports: [
    RouterModule.forChild([{path: '', component: SharedFormComponent}]),
    MaterialModule,
    CommonModule
  ]
})
export class SharedFormModule { }
