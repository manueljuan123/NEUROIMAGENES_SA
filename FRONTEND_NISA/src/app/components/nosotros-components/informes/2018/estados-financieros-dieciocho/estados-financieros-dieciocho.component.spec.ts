import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosFinancierosDieciochoComponent } from './estados-financieros-dieciocho.component';

describe('EstadosFinancierosDieciochoComponent', () => {
  let component: EstadosFinancierosDieciochoComponent;
  let fixture: ComponentFixture<EstadosFinancierosDieciochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosFinancierosDieciochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosFinancierosDieciochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
