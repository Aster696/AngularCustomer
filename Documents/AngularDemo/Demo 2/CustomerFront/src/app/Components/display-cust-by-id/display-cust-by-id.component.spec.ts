import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCustByIdComponent } from './display-cust-by-id.component';

describe('DisplayCustByIdComponent', () => {
  let component: DisplayCustByIdComponent;
  let fixture: ComponentFixture<DisplayCustByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCustByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCustByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
