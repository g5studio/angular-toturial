import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvConvertComponent } from './csv-convert/csv-convert.component';

const routes: Routes = [
  { path: 'csv-convert', component: CsvConvertComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticesRoutingModule { }
