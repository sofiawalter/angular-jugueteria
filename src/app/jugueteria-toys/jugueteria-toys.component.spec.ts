import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteriaToysComponent } from './jugueteria-toys.component';

describe('JugueteriaToysComponent', () => {
  let component: JugueteriaToysComponent;
  let fixture: ComponentFixture<JugueteriaToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteriaToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugueteriaToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
