import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosFinancierosDiecinueveComponent } from './estados-financieros-diecinueve.component';

describe('EstadosFinancierosDiecinueveComponent', () => {
  let component: EstadosFinancierosDiecinueveComponent;
  let fixture: ComponentFixture<EstadosFinancierosDiecinueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosFinancierosDiecinueveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosFinancierosDiecinueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
