import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeGestionContainerComponent } from './informe-gestion-container.component';

describe('InformeGestionContainerComponent', () => {
  let component: InformeGestionContainerComponent;
  let fixture: ComponentFixture<InformeGestionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeGestionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeGestionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
