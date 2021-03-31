import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserUnsupportComponent } from './pages/browser-unsupport/browser-unsupport.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    BrowserUnsupportComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule { }
