import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EDevice } from '@shared/enums/general.enum';
import { WindowHelperService } from '@shared/services/window-helper.service';
import { PopupBox } from '@shared/utilities/abstract/popup-box';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends PopupBox implements OnInit {

  constructor(
    public $window: WindowHelperService,
    public router: Router
  ) {
    super();
  }

  get deviceType(): typeof EDevice { return EDevice; }

  ngOnInit(): void {
  }

}
