import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleConverterComponent } from './angle-converter.component';

describe('AngleConverterComponent', () => {
  let component: AngleConverterComponent;
  let fixture: ComponentFixture<AngleConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngleConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
