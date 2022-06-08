import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaInteligenciaComponent } from './prueba-inteligencia.component';

describe('PruebaInteligenciaComponent', () => {
  let component: PruebaInteligenciaComponent;
  let fixture: ComponentFixture<PruebaInteligenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaInteligenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaInteligenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
