import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAdministracionNeuropsicologicaComponent } from './prueba-administracion-neuropsicologica.component';

describe('PruebaAdministracionNeuropsicologicaComponent', () => {
  let component: PruebaAdministracionNeuropsicologicaComponent;
  let fixture: ComponentFixture<PruebaAdministracionNeuropsicologicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaAdministracionNeuropsicologicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAdministracionNeuropsicologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
