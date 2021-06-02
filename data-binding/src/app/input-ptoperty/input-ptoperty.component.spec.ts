import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPtopertyComponent } from './input-ptoperty.component';

describe('InputPtopertyComponent', () => {
  let component: InputPtopertyComponent;
  let fixture: ComponentFixture<InputPtopertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPtopertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPtopertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
