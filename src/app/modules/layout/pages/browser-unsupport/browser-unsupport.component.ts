import { Component, OnInit } from '@angular/core';
import { WindowHelperService } from '@shared/services/window-helper.service';

@Component({
  selector: 'app-browser-unsupport',
  templateUrl: './browser-unsupport.component.html',
  styleUrls: ['./browser-unsupport.component.scss']
})
export class BrowserUnsupportComponent implements OnInit {

  constructor(
    public $window: WindowHelperService
  ) { }

  get agent() {
    return window.navigator.userAgent
  }

  ngOnInit(): void {
  }

}
