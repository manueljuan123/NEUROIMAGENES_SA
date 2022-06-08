import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGestionDiecisieteContainerComponent } from './informe-gestion-diecisiete-container.component';

describe('InformeGestionDiecisieteContainerComponent', () => {
  let component: InformeGestionDiecisieteContainerComponent;
  let fixture: ComponentFixture<InformeGestionDiecisieteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeGestionDiecisieteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeGestionDiecisieteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
