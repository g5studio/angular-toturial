import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticesRoutingModule } from './practices-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CsvConvertComponent } from './csv-convert/csv-convert.component';


@NgModule({
  declarations: [
    CsvConvertComponent
  ],
  imports: [
    CommonModule,
    PracticesRoutingModule,
    SharedModule
  ]
})
export class PracticesModule { }
