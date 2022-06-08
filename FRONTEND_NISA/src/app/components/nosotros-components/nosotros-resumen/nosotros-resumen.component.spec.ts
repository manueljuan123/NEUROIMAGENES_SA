import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosResumenComponent } from './nosotros-resumen.component';

describe('NosotrosResumenComponent', () => {
  let component: NosotrosResumenComponent;
  let fixture: ComponentFixture<NosotrosResumenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosResumenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
