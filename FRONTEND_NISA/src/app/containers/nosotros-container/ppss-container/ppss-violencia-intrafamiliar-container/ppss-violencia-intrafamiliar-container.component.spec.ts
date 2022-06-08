import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpssViolenciaIntrafamiliarContainerComponent } from './ppss-violencia-intrafamiliar-container.component';

describe('PpssViolenciaIntrafamiliarContainerComponent', () => {
  let component: PpssViolenciaIntrafamiliarContainerComponent;
  let fixture: ComponentFixture<PpssViolenciaIntrafamiliarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpssViolenciaIntrafamiliarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpssViolenciaIntrafamiliarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
