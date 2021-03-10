import { Injectable, ElementRef, Output, EventEmitter } from '@angular/core';

@Injectable()
export abstract class PopupBox {
    constructor() {
    }

    public isOpen = false;
    private menu: any;

    private e = this.detectBlurEvent.bind(this);

    private detectBlurEvent(e: MouseEvent) {
        if (!this.menu.contains(e.target)) {
            this.collapse();
        }
    }


    public expand(menu: ElementRef, event?: Event) {
        if (event) {
            event.stopPropagation();
        }
        this.menu = menu;
        this.isOpen = true;
        addEventListener('click', this.e);
    }

    public collapse() {
        removeEventListener('click', this.e);
        this.isOpen = false;
        if (this.menu) {
            this.onClose();
        }
    }

    public onClose() { }

}
