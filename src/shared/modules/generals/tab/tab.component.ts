import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WindowHelperService } from '@shared/services/window-helper.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() tabs: string[];
  @Input() default: number = 1;

  constructor(
    public $window: WindowHelperService,
    private router: Router,
    private activeRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }

  get currentTab() { return parseInt(this.activeRoute.snapshot.params.tab, 10) || this.default }
  get currentUrl() { return this.router.url.split(`/${this.activeRoute.snapshot.params.tab}` || null)[0] }

  public navigate(tab: number) {
    this.router.navigateByUrl(`${this.currentUrl}/${tab}`);
  }

}
