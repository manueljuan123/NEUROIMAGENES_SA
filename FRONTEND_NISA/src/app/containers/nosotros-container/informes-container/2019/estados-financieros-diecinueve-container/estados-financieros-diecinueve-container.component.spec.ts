import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosFinancierosDiecinueveContainerComponent } from './estados-financieros-diecinueve-container.component';

describe('EstadosFinancierosDiecinueveContainerComponent', () => {
  let component: EstadosFinancierosDiecinueveContainerComponent;
  let fixture: ComponentFixture<EstadosFinancierosDiecinueveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosFinancierosDiecinueveContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosFinancierosDiecinueveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
