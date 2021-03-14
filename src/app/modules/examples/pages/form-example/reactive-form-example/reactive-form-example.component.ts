import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Validator } from '@shared/utilities/helpers/validate.helper';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) {

  }

  public form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    password: ['', [Validators.required, this.passwordValidator]]
  })

  ngOnInit(): void {
  }

  public submit() {
    console.log(this.form.getRawValue());
  }

  public getErrorMessage(field: string) {
    return this.form.controls[field].hasError('required') ? "此欄位必填" :
      this.form.controls[field].getError('invalid') || null;
  }

  private passwordValidator(controller: AbstractControl): ValidationErrors {
    return new Validator().validatePassword(controller.value) ? {} : {
      invalid: '長度必須8到20位元字符且必須包含特殊符號、數字、英文大小寫字母'
    }
  }

}
