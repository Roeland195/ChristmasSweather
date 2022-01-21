import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOverViewComponent } from './order-over-view.component';

describe('OrderOverViewComponent', () => {
  let component: OrderOverViewComponent;
  let fixture: ComponentFixture<OrderOverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOverViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
