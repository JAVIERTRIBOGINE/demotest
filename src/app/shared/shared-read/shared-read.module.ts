import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedReadComponent } from './shared-read.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ExchangeValuesPipe } from 'src/app/core/pipes/exchange-values.pipe';

@NgModule({
  declarations: [SharedReadComponent, ExchangeValuesPipe],
  imports: [CommonModule, MaterialModule],
  exports: [SharedReadComponent],
})
export class SharedReadModule {}
