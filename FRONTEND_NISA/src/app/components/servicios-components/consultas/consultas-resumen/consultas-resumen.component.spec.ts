import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasResumenComponent } from './consultas-resumen.component';

describe('ConsultasResumenComponent', () => {
  let component: ConsultasResumenComponent;
  let fixture: ComponentFixture<ConsultasResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
