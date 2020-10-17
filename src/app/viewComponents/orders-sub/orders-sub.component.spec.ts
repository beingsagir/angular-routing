import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSubComponent } from './orders-sub.component';

describe('OrdersSubComponent', () => {
  let component: OrdersSubComponent;
  let fixture: ComponentFixture<OrdersSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
