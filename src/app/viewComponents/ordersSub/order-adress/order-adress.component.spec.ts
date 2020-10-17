import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAdressComponent } from './order-adress.component';

describe('OrderAdressComponent', () => {
  let component: OrderAdressComponent;
  let fixture: ComponentFixture<OrderAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderAdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
