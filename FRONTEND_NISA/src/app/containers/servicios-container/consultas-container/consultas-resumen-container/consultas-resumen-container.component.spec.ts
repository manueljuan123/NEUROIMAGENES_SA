import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasResumenContainerComponent } from './consultas-resumen-container.component';

describe('ConsultasResumenContainerComponent', () => {
  let component: ConsultasResumenContainerComponent;
  let fixture: ComponentFixture<ConsultasResumenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasResumenContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasResumenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
