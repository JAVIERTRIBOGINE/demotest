import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMasterComponent } from './shared-master.component';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [SharedMasterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SharedMasterComponent],
})
export class SharedMasterModule {}
