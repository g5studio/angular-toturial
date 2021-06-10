import { ExampleDialogComponent, IExampleDialog } from './../../components/example-dialog/example-dialog.component';
import { Component } from '@angular/core';
import { OverlayService } from '@shared/modules/overlay/overlay.service';
import { IDialog } from '@shared/utilities/interfaces/general.interface';

@Component({
  selector: 'app-overlay-example',
  templateUrl: './overlay-example.component.html',
  styleUrls: ['./overlay-example.component.scss']
})
export class OverlayExampleComponent {

  constructor(
    public $overlay: OverlayService
  ) { }

  public toggleDialog() {
    this.$overlay.toggleDialog<IExampleDialog>(ExampleDialogComponent, {
      backdropClose: true,
      params: {
        title: '修改密碼',
        callbacks: {
          close: this.onClose.bind(this),
          submit: this.onSubmit.bind(this)
        }
      }
    });
  }

  private onClose(dialog: IDialog<any>) {
    console.log(dialog, this);
  }

  private onSubmit(data: any) {
    console.log(data);
  }
}
