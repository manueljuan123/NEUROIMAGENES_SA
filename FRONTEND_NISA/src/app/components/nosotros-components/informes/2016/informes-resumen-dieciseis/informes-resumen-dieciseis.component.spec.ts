import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenDieciseisComponent } from './informes-resumen-dieciseis.component';

describe('InformesResumenDieciseisComponent', () => {
  let component: InformesResumenDieciseisComponent;
  let fixture: ComponentFixture<InformesResumenDieciseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenDieciseisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenDieciseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
