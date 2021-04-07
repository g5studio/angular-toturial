import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserUnsupportComponent } from '@layout/pages/browser-unsupport/browser-unsupport.component';
import { ERouterPath } from '@shared/utilities/maps/router.map';
import { BrowserGuard } from './browser.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [BrowserGuard],
    children: [
      { path: '', redirectTo: ERouterPath.Tutorial, pathMatch: 'full' },
      {
        path: ERouterPath.Example,
        loadChildren: () => import('./modules/examples/examples.module').then(m => m.ExamplesModule)
      },
      {
        path: ERouterPath.Tutorial,
        loadChildren: () => import('./modules/tutorial/tutorial.module').then(m => m.TutorialModule)
      }
    ]
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
