import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoHumanoComponent } from './equipo-humano.component';

describe('EquipoHumanoComponent', () => {
  let component: EquipoHumanoComponent;
  let fixture: ComponentFixture<EquipoHumanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoHumanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
