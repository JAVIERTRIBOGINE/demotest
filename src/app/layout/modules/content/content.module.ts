import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [ContentComponent, BreadcrumbComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [RouterModule, ContentComponent],
})
export class ContentModule {}
