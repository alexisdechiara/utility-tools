import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuminousConverterComponent } from './luminous-converter.component';

describe('LuminousConverterComponent', () => {
  let component: LuminousConverterComponent;
  let fixture: ComponentFixture<LuminousConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuminousConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuminousConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
