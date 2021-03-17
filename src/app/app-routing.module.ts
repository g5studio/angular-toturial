import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserUnsupportComponent } from '@layout/pages/browser-unsupport/browser-unsupport.component';
import { BrowserGuard } from './browser.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [BrowserGuard],
    children: [{
      path: 'examples',
      loadChildren: () => import('./modules/examples/examples.module').then(m => m.ExamplesModule)
    }]
  },
  {
    path: 'browser-unsupport',
    component: BrowserUnsupportComponent
  },
  {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
