import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoCartComponent } from './carrito-cart.component';

describe('CarritoCartComponent', () => {
  let component: CarritoCartComponent;
  let fixture: ComponentFixture<CarritoCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
