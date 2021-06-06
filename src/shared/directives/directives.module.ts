import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ResponsiveViewportDirective } from './responsive-viewport.directive';
import { ActiveDialogDirective } from './active-dialog.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ResponsiveViewportDirective,
    ActiveDialogDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ResponsiveViewportDirective,
    ActiveDialogDirective
  ]
})
export class DirectivesModule { }
