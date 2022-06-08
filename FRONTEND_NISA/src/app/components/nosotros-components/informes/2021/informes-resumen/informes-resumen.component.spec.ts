import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenComponent } from './informes-resumen.component';

describe('InformesResumenComponent', () => {
  let component: InformesResumenComponent;
  let fixture: ComponentFixture<InformesResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
