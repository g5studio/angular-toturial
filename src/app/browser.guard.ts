import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { WindowHelperService } from '@shared/services/window-helper.service';

@Injectable({
  providedIn: 'root'
})
export class BrowserGuard implements CanActivate {

  constructor(
    private $window: WindowHelperService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.$window.isUnsupportBrowser() && !state.url.includes('browser-unsupport')) {
      console.log('unsupported');
      this.router.navigateByUrl('browser-unsupport');
    }
    return true;
  }

}
