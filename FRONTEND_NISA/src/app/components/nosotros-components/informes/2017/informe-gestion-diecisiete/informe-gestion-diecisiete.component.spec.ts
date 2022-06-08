import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGestionDiecisieteComponent } from './informe-gestion-diecisiete.component';

describe('InformeGestionDiecisieteComponent', () => {
  let component: InformeGestionDiecisieteComponent;
  let fixture: ComponentFixture<InformeGestionDiecisieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeGestionDiecisieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeGestionDiecisieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
