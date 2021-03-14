import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueConverterComponent } from './value-converter.component';

describe('ValueConverterComponent', () => {
  let component: ValueConverterComponent;
  let fixture: ComponentFixture<ValueConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
