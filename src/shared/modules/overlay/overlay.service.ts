import { IDialog, IDialogConfig } from '@utilities/interfaces/general.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EAction } from '@shared/utilities/enums/general.enum';

interface DialogAction {
  action: EAction;
  dialog: IDialog<any>
}

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor() {
    this.dialogAction$.subscribe(action => this.resolveDialogAction(action));
  }

  private dialogQue = new Set<IDialog<any>>();
  private dialogAction = new BehaviorSubject<DialogAction>(null);
  private dialogAction$ = this.dialogAction.asObservable().pipe(
    filter(action => action?.dialog?.component)
  );

  get dialogs() { return this.dialogQue; }

  public toggleDialog(dialog: any, config?: IDialogConfig<any>) {
    this.dialogAction.next({
      action: EAction.Create,
      dialog: {
        id: new Date().toISOString(),
        component: dialog,
        config
      }
    })
  }

  public closeDialog(dialog: IDialog<any>) {
    this.dialogAction.next({
      action: EAction.Delete,
      dialog
    });
  }

  private resolveDialogAction(resource: DialogAction) {
    switch (resource.action) {
      case EAction.Create: this.createDialog(resource.dialog); break;
      case EAction.Delete: this.deleteDialog(resource.dialog); break;
    }
  }

  private createDialog(dialog: IDialog<any>) {
    !this.dialogQue.has(dialog) ? this.dialogQue.add(dialog) :
      console.error(`dialog ${dialog.id} already exist ! `);
  }

  private deleteDialog(dialog: IDialog<any>) {
    this.dialogQue.has(dialog) ? this.dialogQue.delete(dialog) :
      console.error(`dialog ${dialog.id} not found !`);
  }
}
