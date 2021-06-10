import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-overlay-layout',
  templateUrl: './overlay-layout.component.html',
  styleUrls: ['./overlay-layout.component.scss']
})
export class OverlayLayoutComponent implements OnInit {

  constructor(
    public $overlay: OverlayService,
  ) { }

  ngOnInit() { }
}
