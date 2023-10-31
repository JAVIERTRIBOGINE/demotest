import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedReadModule } from './shared-read/shared-read.module';
import { SharedMasterModule } from './shared-master/shared-master.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedReadModule, SharedMasterModule],
  exports: [SharedReadModule, SharedMasterModule],
})
export class SharedModule {}
