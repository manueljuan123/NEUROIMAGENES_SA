import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaInteligenciaContainerComponent } from './prueba-inteligencia-container.component';

describe('PruebaInteligenciaContainerComponent', () => {
  let component: PruebaInteligenciaContainerComponent;
  let fixture: ComponentFixture<PruebaInteligenciaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaInteligenciaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaInteligenciaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
