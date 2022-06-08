import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGestionVeinteComponent } from './informe-gestion-veinte.component';

describe('InformeGestionVeinteComponent', () => {
  let component: InformeGestionVeinteComponent;
  let fixture: ComponentFixture<InformeGestionVeinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeGestionVeinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeGestionVeinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
