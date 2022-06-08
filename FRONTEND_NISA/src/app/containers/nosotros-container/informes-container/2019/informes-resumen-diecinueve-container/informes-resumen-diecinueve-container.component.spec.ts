import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenDiecinueveContainerComponent } from './informes-resumen-diecinueve-container.component';

describe('InformesResumenDiecinueveContainerComponent', () => {
  let component: InformesResumenDiecinueveContainerComponent;
  let fixture: ComponentFixture<InformesResumenDiecinueveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenDiecinueveContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenDiecinueveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
