import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenQuinceComponent } from './informes-resumen-quince.component';

describe('InformesResumenQuinceComponent', () => {
  let component: InformesResumenQuinceComponent;
  let fixture: ComponentFixture<InformesResumenQuinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenQuinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenQuinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
