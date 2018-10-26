import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAndExploreComponent } from './buy-and-explore.component';

describe('BuyAndExploreComponent', () => {
  let component: BuyAndExploreComponent;
  let fixture: ComponentFixture<BuyAndExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAndExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAndExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
