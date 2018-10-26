import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAndRechargeComponent } from './pay-and-recharge.component';

describe('PayAndRechargeComponent', () => {
  let component: PayAndRechargeComponent;
  let fixture: ComponentFixture<PayAndRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayAndRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAndRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
