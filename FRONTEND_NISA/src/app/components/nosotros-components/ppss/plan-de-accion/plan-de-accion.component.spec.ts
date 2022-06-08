import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeAccionComponent } from './plan-de-accion.component';

describe('PlanDeAccionComponent', () => {
  let component: PlanDeAccionComponent;
  let fixture: ComponentFixture<PlanDeAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanDeAccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDeAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
