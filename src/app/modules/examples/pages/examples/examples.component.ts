import { switchMap, tap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements AfterViewInit {

  @ViewChild('tCommon') common: ElementRef;
  @ViewChild('tDirective') directive: ElementRef;
  @ViewChild('tForm') form: ElementRef;

  constructor(
    public router: Router,
    private renderer: Renderer2
  ) { }

  private animation$ = timer(0).pipe(
    tap(() => this.playAnimation(this.common.nativeElement)),
    switchMap(() => timer(500)),
    tap(() => this.playAnimation(this.directive.nativeElement)),
    switchMap(() => timer(500)),
    tap(() => this.playAnimation(this.form.nativeElement))
  )

  ngAfterViewInit(): void {
    this.animation$.subscribe();
  }

  private playAnimation(element: HTMLElement) {
    this.renderer.addClass(element, 'fadein');
  }

}
