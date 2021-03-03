import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'src/app/modules/translate/translate.module';
import { DirectivesModule } from './directives/directives.module';


@NgModule({
  declarations: [],
  imports: [
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
