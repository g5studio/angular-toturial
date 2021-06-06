import { DirectivesModule } from '@shared/directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayLayoutComponent } from './overlay-layout/overlay-layout.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    OverlayLayoutComponent,
    DialogComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    OverlayLayoutComponent,
    DialogComponent
  ]
})
export class OverlayModule { }
