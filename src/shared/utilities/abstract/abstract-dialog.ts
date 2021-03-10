import { EventEmitter, Injectable, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export abstract class AbstractDialog {

    @Output() OnCancel: EventEmitter<any> = new EventEmitter();
    @Output() OnConfirm: EventEmitter<any> = new EventEmitter();

    constructor(
        private modal: NgbActiveModal
    ) { }

    public prop: any;

    public cancel(parms?: any) {
        this.OnCancel.emit(parms);
        this.modal.close();
    }

    public confirm(parms?: any) {
        this.OnConfirm.emit(parms);
        this.modal.close();
    }
}