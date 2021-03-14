import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsFormExampleComponent } from './rxjs-form-example.component';

describe('RxjsFormExampleComponent', () => {
  let component: RxjsFormExampleComponent;
  let fixture: ComponentFixture<RxjsFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsFormExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
