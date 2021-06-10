import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDialog, IDialogConfig } from '@shared/utilities/interfaces/general.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent<T> implements IDialog<T> {

  @Output() OnClose = new EventEmitter<void>();
  @Input() disableClose;

  constructor() { }

  public id: string;
  public component: any;
  public config: IDialogConfig<T>;

}
