import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstanceConverterComponent } from './substance-converter.component';

describe('SubstanceConverterComponent', () => {
  let component: SubstanceConverterComponent;
  let fixture: ComponentFixture<SubstanceConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstanceConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstanceConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
