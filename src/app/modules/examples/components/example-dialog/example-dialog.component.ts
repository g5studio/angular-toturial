import { DialogComponent } from '@shared/modules/overlay/dialog/dialog.component';
import { Component } from '@angular/core';
import { OverlayService } from '@shared/modules/overlay/overlay.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type callback = {
  [key: string]: (params) => void
}

export interface IExampleDialog {
  title: string;
  callbacks?: callback;
}

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent {

  constructor(
    private $overlay: OverlayService,
    private dialog: DialogComponent<IExampleDialog>,
    private fb: FormBuilder
  ) { }

  get id() { return this.dialog.id; }
  get title() { return this.dialog.config?.params?.title || null; }
  get callbacks() { return this.dialog.config?.params?.callbacks || null };

  public form: FormGroup = this.fb.group({
    oldPassword: [null, Validators.required],
    password: [null, Validators.required]
  })

  public toggleDialog() {
    this.$overlay.toggleDialog<any>(DialogComponent, {
      backdropClose: true
    });
  }

  public close() {
    this.$overlay.closeDialog(this.dialog);
    this.callbacks.close(this.dialog);
  }

  public submit() {
    console.log('submit')
    this.$overlay.closeDialog(this.dialog);
    this.callbacks.submit(this.form.getRawValue());
  }

}
