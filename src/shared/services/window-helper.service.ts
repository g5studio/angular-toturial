import { Injectable, ElementRef } from '@angular/core';
import { EDevice } from '@shared/enums/general.enum';
import { Subject, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

const DEVICE = {
  XS: 0,
  MD: 767,
  XL: 1200,
  XXL: 1920
};

const MOBILE_AGENT = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];

@Injectable({
  providedIn: 'root'
})

export class WindowHelperService {

  constructor() { }

  get isMobileDevice() { return MOBILE_AGENT.some(agent => window.navigator.userAgent.includes(agent)); }

  public pageWidth: number;

  private device: ReplaySubject<EDevice> = new ReplaySubject();
  public device$ = this.device.asObservable().pipe(
    distinctUntilChanged()
  );

  private scrollTop: Subject<number> = new Subject();
  public scrollTop$ = this.scrollTop.asObservable();

  public scrollTo(top: number) { this.scrollTop.next(top); }

  public isUnsupportBrowser() {
    const UserAgent = window.navigator.userAgent;
    const isOpera = UserAgent.indexOf('Opera') > -1; // 判断是否Opera浏览器
    const isIE = UserAgent.indexOf('compatible') > -1 && UserAgent.indexOf('MSIE') > -1 && !isOpera; // 判断是否IE浏览器
    const isIE11 = (UserAgent.toLowerCase().indexOf('trident') > -1 && UserAgent.indexOf('rv') > -1);
    const isWeChat = /micromessenger/i.test(UserAgent);
    const isEdge = /Edg/i.test(UserAgent);
    const isChrome = /Chrome/i.test(UserAgent);
    const isBaidu = /baiduboxapp/i.test(UserAgent);
    if (isChrome && !isEdge && !isBaidu) {
      return !this.getChromeSupported(UserAgent);
    }
    return isIE || isIE11 || isWeChat || isBaidu;
  }

  public detectIsCollisionRightBound(e: ElementRef, left?: number): boolean {
    const rect = e.nativeElement.getBoundingClientRect();
    const toLeftBound = left || rect.left;
    const elementWidth = rect.width;
    return (document.body.clientWidth - toLeftBound - elementWidth) < (document.body.clientWidth - this.pageWidth) / 2;
  }

  public detectIsCollisionLeftBound(e: ElementRef): boolean {
    const rect = e.nativeElement.getBoundingClientRect();
    const toRightBound = rect.right;
    const elementWidth = rect.width;
    return (document.body.clientWidth - toRightBound - elementWidth) < (document.body.clientWidth - this.pageWidth) / 2;
  }

  public detectWindowSize() {
    this.device.next(this.getDevice());
  }

  public getDevice() {
    const width = window.innerWidth;
    return (width >= DEVICE.XL ? EDevice.Desktop :
      (width < DEVICE.XL && width >= DEVICE.MD) ? EDevice.Tablet : EDevice.Mobile);
  }

  private getChromeSupported(agent: string) {
    return parseInt(agent.split('Chrome/')[1].split('.')[0], 10) > 70;
  }

}
