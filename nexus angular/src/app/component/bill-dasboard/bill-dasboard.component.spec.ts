import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDasboardComponent } from './bill-dasboard.component';

describe('BillDasboardComponent', () => {
  let component: BillDasboardComponent;
  let fixture: ComponentFixture<BillDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
