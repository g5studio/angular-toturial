import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { DirectiveExampleComponent } from './pages/directive-example/directive-example.component';
import { SharedModule } from '@shared/shared.module';
import { FormExampleComponent } from './pages/form-example/form-example.component';
import { RxjsFormExampleComponent } from './pages/form-example/rxjs-form-example/rxjs-form-example.component';
import { ReactiveFormExampleComponent } from './pages/form-example/reactive-form-example/reactive-form-example.component';
import { CommonExampleComponent } from './pages/common-example/common-example.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { OverlayExampleComponent } from './pages/overlay-example/overlay-example.component';
import { ExampleDialogComponent } from './components/example-dialog/example-dialog.component';


@NgModule({
  declarations: [
    DirectiveExampleComponent,
    FormExampleComponent,
    RxjsFormExampleComponent,
    ReactiveFormExampleComponent,
    CommonExampleComponent,
    ExamplesComponent,
    OverlayExampleComponent,
    ExampleDialogComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
