import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpssPlanDeAccionContainerComponent } from './ppss-plan-de-accion-container.component';

describe('PpssPlanDeAccionContainerComponent', () => {
  let component: PpssPlanDeAccionContainerComponent;
  let fixture: ComponentFixture<PpssPlanDeAccionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpssPlanDeAccionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpssPlanDeAccionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
