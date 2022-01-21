import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagewheelComponent } from './imagewheel.component';

describe('ImagewheelComponent', () => {
  let component: ImagewheelComponent;
  let fixture: ComponentFixture<ImagewheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagewheelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagewheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
