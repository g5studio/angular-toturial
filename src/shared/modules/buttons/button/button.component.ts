import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<MouseEvent>();
  @Input() disabled: boolean;
  @Input() white;
  @Input() center;
  @Input() type = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
