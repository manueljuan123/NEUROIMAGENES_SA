import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenVeinteComponent } from './informes-resumen-veinte.component';

describe('InformesResumenVeinteComponent', () => {
  let component: InformesResumenVeinteComponent;
  let fixture: ComponentFixture<InformesResumenVeinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenVeinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenVeinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
