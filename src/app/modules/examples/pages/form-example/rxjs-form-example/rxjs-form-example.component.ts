import { Component, OnInit } from '@angular/core';
import { UnsubOndestroy } from '@shared/utilities/abstract/unsub-ondestroy';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-form-example',
  templateUrl: './rxjs-form-example.component.html',
  styleUrls: ['./rxjs-form-example.component.scss']
})
export class RxjsFormExampleComponent extends UnsubOndestroy implements OnInit {

  constructor() {
    super();
  }

  public nameField = new Subject<string>();
  public passwordField = new Subject<string>();
  public valid = false;

  public formValidator$: Observable<boolean> = combineLatest([
    this.nameField.asObservable().pipe(startWith('')),
    this.passwordField.asObservable().pipe(startWith(''))
  ]).pipe(
    takeUntil(this.onDestroy$),
    map(([name, password]) => !!name && !!password)
  );

  ngOnInit(): void {
    this.formValidator$.subscribe(
      valid => this.valid = valid
    );
  }

}
