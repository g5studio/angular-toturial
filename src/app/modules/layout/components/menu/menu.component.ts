import { RouterMap } from './../../../../../shared/utilities/maps/router.map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EDevice } from '@shared/utilities/enums/general.enum';
import { WindowHelperService } from '@shared/services/window-helper.service';
import { PopupBox } from '@shared/utilities/abstract/popup-box';
import { ERouterPath } from '@shared/utilities/maps/router.map';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends PopupBox implements OnInit {

  constructor(
    public $window: WindowHelperService,
    private router: Router
  ) {
    super();
  }

  get deviceType(): typeof EDevice { return EDevice; }
  get routerPath(): typeof ERouterPath { return ERouterPath; }

  ngOnInit(): void {
  }

  public navigate(url: string) {
    if (this.isOpen) { this.collapse() }
    this.router.navigateByUrl(url);
  }

  public getRouterName(path: ERouterPath) { return RouterMap.get(path); }
  public getIsActiveRoute(path: ERouterPath) { return this.router.url.replace('/', '').includes(path) }

}
