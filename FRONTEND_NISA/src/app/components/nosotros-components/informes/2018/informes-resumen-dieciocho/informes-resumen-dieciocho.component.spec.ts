import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenDieciochoComponent } from './informes-resumen-dieciocho.component';

describe('InformesResumenDieciochoComponent', () => {
  let component: InformesResumenDieciochoComponent;
  let fixture: ComponentFixture<InformesResumenDieciochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenDieciochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenDieciochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
