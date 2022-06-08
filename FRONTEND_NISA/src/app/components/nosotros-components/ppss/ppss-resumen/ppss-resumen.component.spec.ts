import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpssResumenComponent } from './ppss-resumen.component';

describe('PpssResumenComponent', () => {
  let component: PpssResumenComponent;
  let fixture: ComponentFixture<PpssResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpssResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpssResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
