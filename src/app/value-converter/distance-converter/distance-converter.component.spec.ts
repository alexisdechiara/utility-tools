import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceConverterComponent } from './distance-converter.component';

describe('DistanceConverterComponent', () => {
  let component: DistanceConverterComponent;
  let fixture: ComponentFixture<DistanceConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
