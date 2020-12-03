import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuguetesAboutComponent } from './juguetes-about.component';

describe('JuguetesAboutComponent', () => {
  let component: JuguetesAboutComponent;
  let fixture: ComponentFixture<JuguetesAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuguetesAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuguetesAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
