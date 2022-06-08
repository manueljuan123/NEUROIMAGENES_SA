import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesResumenContainerComponent } from './examenes-resumen-container.component';

describe('ExamenesResumenContainerComponent', () => {
  let component: ExamenesResumenContainerComponent;
  let fixture: ComponentFixture<ExamenesResumenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesResumenContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesResumenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
