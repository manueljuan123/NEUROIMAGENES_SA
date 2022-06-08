import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenDiecinueveComponent } from './informes-resumen-diecinueve.component';

describe('InformesResumenDiecinueveComponent', () => {
  let component: InformesResumenDiecinueveComponent;
  let fixture: ComponentFixture<InformesResumenDiecinueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenDiecinueveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenDiecinueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
