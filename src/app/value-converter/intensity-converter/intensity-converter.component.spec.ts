import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensityConverterComponent } from './intensity-converter.component';

describe('IntensityConverterComponent', () => {
  let component: IntensityConverterComponent;
  let fixture: ComponentFixture<IntensityConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensityConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntensityConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
