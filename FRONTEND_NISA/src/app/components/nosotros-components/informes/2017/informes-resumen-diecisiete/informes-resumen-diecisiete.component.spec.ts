import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenDiecisieteComponent } from './informes-resumen-diecisiete.component';

describe('InformesResumenDiecisieteComponent', () => {
  let component: InformesResumenDiecisieteComponent;
  let fixture: ComponentFixture<InformesResumenDiecisieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenDiecisieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenDiecisieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
