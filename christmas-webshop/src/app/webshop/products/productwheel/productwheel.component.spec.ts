import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwheelComponent } from './productwheel.component';

describe('ProductwheelComponent', () => {
  let component: ProductwheelComponent;
  let fixture: ComponentFixture<ProductwheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductwheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
