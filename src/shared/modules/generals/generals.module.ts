import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    TabComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    ButtonsModule
  ],
  exports: [
    TabComponent
  ]
})
export class GeneralsModule { }
