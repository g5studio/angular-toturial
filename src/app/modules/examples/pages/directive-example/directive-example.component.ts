import { Component, OnInit } from '@angular/core';
import { interval, of, Subject, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private candles = [1, 5, 3, 9, 6, 6, 3, 2, 8, 10, 6];
  public candle$ = interval(1000).pipe(
    map(index => this.candles[index])
  );

  public value = 0;

}
