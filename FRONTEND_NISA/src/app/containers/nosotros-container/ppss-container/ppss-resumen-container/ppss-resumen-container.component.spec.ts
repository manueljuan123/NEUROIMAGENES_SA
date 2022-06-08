import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpssResumenContainerComponent } from './ppss-resumen-container.component';

describe('PpssResumenContainerComponent', () => {
  let component: PpssResumenContainerComponent;
  let fixture: ComponentFixture<PpssResumenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpssResumenContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpssResumenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
