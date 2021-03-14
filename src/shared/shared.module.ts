import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'src/app/modules/translate/translate.module';
import { DirectivesModule } from './directives/directives.module';
import { GeneralsModule } from './modules/generals/generals.module';
import { ButtonsModule } from './modules/buttons/buttons.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';


@NgModule({
  declarations: [],
  imports: [
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GeneralsModule,
    ButtonsModule,
    DropdownModule
  ],
  exports: [
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralsModule,
    ButtonsModule,
    DropdownModule
  ]
})
export class SharedModule { }
