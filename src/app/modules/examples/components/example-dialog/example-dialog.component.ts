import { DialogComponent } from '@shared/modules/overlay/dialog/dialog.component';
import { Component } from '@angular/core';
import { OverlayService } from '@shared/modules/overlay/overlay.service';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent {

  constructor(
    private $overlay: OverlayService
  ) { }

  public toggleDialog() {
    this.$overlay.toggleDialog(DialogComponent);
  }

}
