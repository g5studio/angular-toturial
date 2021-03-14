import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveExampleComponent } from './pages/directive-example/directive-example.component';
import { FormExampleComponent } from './pages/form-example/form-example.component';

const routes: Routes = [
  { path: 'directive', component: DirectiveExampleComponent },
  { path: 'form', component: FormExampleComponent },
  { path: 'form/:tab', component: FormExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
