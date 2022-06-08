import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGestionDieciochoComponent } from './informe-gestion-dieciocho.component';

describe('InformeGestionDieciochoComponent', () => {
  let component: InformeGestionDieciochoComponent;
  let fixture: ComponentFixture<InformeGestionDieciochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeGestionDieciochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeGestionDieciochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
