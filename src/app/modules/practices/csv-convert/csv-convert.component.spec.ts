import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvConvertComponent } from './csv-convert.component';

describe('CsvConvertComponent', () => {
  let component: CsvConvertComponent;
  let fixture: ComponentFixture<CsvConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvConvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
