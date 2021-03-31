import { ResizeObserver } from 'resize-observer';
import { tap, takeUntil } from 'rxjs/operators';
import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { WindowHelperService } from '@services/window-helper.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { EDevice } from '@shared/enums/general.enum';

@Directive({
  selector: '[appResponsiveViewport]',
})

/**
 * @description
 * calculate viewport height dynamic on mobile browser
 */

export class ResponsiveViewportDirective extends UnsubOndestroy implements OnInit {
  @Input() responseBuffer: Element[] = [];
  constructor(
    private e: ElementRef,
    private $window: WindowHelperService,
    private render: Renderer2
  ) {
    super();
  }

  private resize$: ResizeObserver;
  get bufferHeight() { return this.responseBuffer.reduce((total, current) => total = total + current.clientHeight, 0); }

  ngOnInit() {
    this.resize$ = this.$window.windowRsizeObserver(this.resizeViewport.bind(this));
    this.$window.device$.pipe(
      takeUntil(this.onDestroy$),
      tap(() => this.onDeviceChanged())
    ).subscribe();
  }

  private onDeviceChanged() {
    if (this.$window.getDevice() === EDevice.Mobile) {
      this.resize$.observe(this.e.nativeElement);
    } else {
      this.resize$.disconnect();
      this.render.removeStyle(this.e.nativeElement, 'height');
    }
  }

  private resizeViewport = () => this.render.setStyle(this.e.nativeElement, 'height', `${window.innerHeight - this.bufferHeight}px`)
}
