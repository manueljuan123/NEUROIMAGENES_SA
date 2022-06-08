import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAdministracionNeuropsicologicaContainerComponent } from './prueba-administracion-neuropsicologica-container.component';

describe('PruebaAdministracionNeuropsicologicaContainerComponent', () => {
  let component: PruebaAdministracionNeuropsicologicaContainerComponent;
  let fixture: ComponentFixture<PruebaAdministracionNeuropsicologicaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaAdministracionNeuropsicologicaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAdministracionNeuropsicologicaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
