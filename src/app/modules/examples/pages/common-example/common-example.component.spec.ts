import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonExampleComponent } from './common-example.component';

describe('CommonExampleComponent', () => {
  let component: CommonExampleComponent;
  let fixture: ComponentFixture<CommonExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
