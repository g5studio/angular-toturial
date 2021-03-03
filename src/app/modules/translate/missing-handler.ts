import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppMissingTranslationHandler implements MissingTranslationHandler {
    constructor() { }
    handle(params: MissingTranslationHandlerParams) {
        console.log(params);
    }
}
