import { ERouterPath, RouterMap } from './../../../../../shared/utilities/maps/router.map';
import { Component, OnInit } from '@angular/core';
import { WindowHelperService } from '@shared/services/window-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public $window: WindowHelperService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  public getRouterName() { return RouterMap.get(this.router.url.replace('/', '')); }

}
