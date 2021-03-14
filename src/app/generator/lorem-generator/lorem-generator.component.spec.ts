import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremGeneratorComponent } from './lorem-generator.component';

describe('LoremGeneratorComponent', () => {
  let component: LoremGeneratorComponent;
  let fixture: ComponentFixture<LoremGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoremGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoremGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
