import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserUnsupportComponent } from './browser-unsupport.component';

describe('BrowserUnsupportComponent', () => {
  let component: BrowserUnsupportComponent;
  let fixture: ComponentFixture<BrowserUnsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserUnsupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserUnsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
