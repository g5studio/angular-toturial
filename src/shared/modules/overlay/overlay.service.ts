import { IDialog, IDialogConfig } from '@utilities/interfaces/general.interface';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EAction } from '@shared/utilities/enums/general.enum';
import { DialogComponent } from '@shared/modules/overlay/dialog/dialog.component';

interface DialogAction {
  action: EAction;
  dialog: IDialog<any>
}

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(
    private injector: Injector
  ) {
    this.dialogAction$.subscribe(action => this.resolveDialogAction(action));
  }

  private dialogQue = new Set<IDialog<any>>();
  private dialogInjectorMap = new Map<string, Injector>();
  private dialogAction = new BehaviorSubject<DialogAction>(null);
  private dialogAction$ = this.dialogAction.asObservable().pipe(
    filter(action => action?.dialog?.component)
  );

  get dialogs() { return this.dialogQue; }

  public getDialogInjector(dialog: IDialog<any>) {
    return this.dialogInjectorMap.get(dialog.id);
  }

  public toggleDialog<T>(dialog: any, config?: IDialogConfig<T>) {
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
    if (!this.dialogQue.has(dialog)) {
      this.dialogQue.add(dialog);
      this.dialogInjectorMap.set(dialog.id, Injector.create({
        providers: [{
          provide: DialogComponent,
          useValue: dialog
        }],
        parent: this.injector
      }));
    } else {
      console.error(`dialog ${dialog.id} already exist ! `);
    }
  }

  private deleteDialog(dialog: IDialog<any>) {
    if (this.dialogQue.has(dialog)) {
      this.dialogQue.delete(dialog);
      this.dialogInjectorMap.delete(dialog.id);
    } else {
      console.error(`dialog ${dialog.id} not found !`);
    }
  }
}
