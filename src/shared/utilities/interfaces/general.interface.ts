import { Injector } from "@angular/core";

export interface IDialog<T> {
  id: string;
  component: any;
  config?: IDialogConfig<T>
}

export interface IDialogConfig<T> {
  title?: string;
  params?: T;
  hideClose?: boolean;
  backdropClose?: boolean;
}
