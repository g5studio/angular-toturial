import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { OverlayService } from '@shared/modules/overlay/overlay.service';
import { IDialog } from '@shared/utilities/interfaces/general.interface';

@Directive({
  selector: '[appActiveDialog]'
})
export class ActiveDialogDirective {

  @Input() dialog: IDialog<any>;

  constructor(
    private element: ElementRef,
    private $overlay: OverlayService
  ) { }

  @HostListener('click', ['$event.target']) onClick(target: HTMLElement) {
    if (!this.element.nativeElement.children[0].contains(target)) {
      if (this.dialog.config?.backdropClose) {
        this.$overlay.closeDialog(this.dialog);
      }
    }
  }

}
