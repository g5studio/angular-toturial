import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WindowHelperService } from '@shared/services/window-helper.service';
import { UnsubOndestroy } from '@shared/utilities/abstract/unsub-ondestroy';
import { ResizeObserver } from 'resize-observer';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends UnsubOndestroy implements OnInit, AfterViewInit {

  @ViewChild('tLayout') layout: ElementRef;

  constructor(
    private $window: WindowHelperService
  ) {
    super();
  }

  private resize$: ResizeObserver;


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.detectWindowSize();
  }

  public onDestory() {
    this.resize$.disconnect();
  }

  private detectWindowSize() {
    this.resize$ = new ResizeObserver(elements => {
      elements.map(
        element => {
          const Class = element.target.className;
          if (Class.includes('Layout')) {
            this.$window.detectWindowSize();
          }
        }
      );
    });
    this.resize$.observe(this.layout.nativeElement);
  }

}
