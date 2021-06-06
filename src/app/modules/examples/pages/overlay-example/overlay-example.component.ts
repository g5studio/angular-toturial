import { ExampleDialogComponent } from './../../components/example-dialog/example-dialog.component';
import { Component } from '@angular/core';
import { OverlayService } from '@shared/modules/overlay/overlay.service';

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
    this.$overlay.toggleDialog(ExampleDialogComponent, {
      backdropClose: true
    });
  }

}
