import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
