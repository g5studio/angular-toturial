import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { DirectiveExampleComponent } from './pages/directive-example/directive-example.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [DirectiveExampleComponent],
  imports: [
    SharedModule,
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
