import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropsicologiaResumenContainerComponent } from './neuropsicologia-resumen-container.component';

describe('NeuropsicologiaResumenContainerComponent', () => {
  let component: NeuropsicologiaResumenContainerComponent;
  let fixture: ComponentFixture<NeuropsicologiaResumenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuropsicologiaResumenContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuropsicologiaResumenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
