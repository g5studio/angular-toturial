import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ResponsiveViewportDirective } from './responsive-viewport.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ResponsiveViewportDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ResponsiveViewportDirective
  ]
})
export class DirectivesModule { }
