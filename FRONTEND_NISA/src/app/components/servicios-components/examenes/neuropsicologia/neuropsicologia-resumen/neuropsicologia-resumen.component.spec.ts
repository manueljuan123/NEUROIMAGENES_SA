import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropsicologiaResumenComponent } from './neuropsicologia-resumen.component';

describe('NeuropsicologiaResumenComponent', () => {
  let component: NeuropsicologiaResumenComponent;
  let fixture: ComponentFixture<NeuropsicologiaResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuropsicologiaResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuropsicologiaResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
