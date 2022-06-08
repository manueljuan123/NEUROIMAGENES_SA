import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoHumanoContainerComponent } from './equipo-humano-container.component';

describe('EquipoHumanoContainerComponent', () => {
  let component: EquipoHumanoContainerComponent;
  let fixture: ComponentFixture<EquipoHumanoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoHumanoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoHumanoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
