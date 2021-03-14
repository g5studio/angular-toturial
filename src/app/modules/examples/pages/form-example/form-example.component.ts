import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  constructor(
    public activeRoute: ActivatedRoute
  ) { }

  public default = 1;
  get currentTab() { return parseInt(this.activeRoute.snapshot.params.tab, 10) || this.default }

  ngOnInit(): void {
  }

}
