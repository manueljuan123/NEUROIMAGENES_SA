import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesResumenComponent } from './examenes-resumen.component';

describe('ExamenesResumenComponent', () => {
  let component: ExamenesResumenComponent;
  let fixture: ComponentFixture<ExamenesResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenesResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
