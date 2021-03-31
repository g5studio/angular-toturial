import { Component, OnInit } from '@angular/core';
import { PopupBox } from '@shared/utilities/abstract/popup-box';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends PopupBox implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  public close(target: HTMLElement) {
    target.blur();
    this.collapse();
  }

}
