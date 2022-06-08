import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenDieciochoContainerComponent } from './informes-resumen-dieciocho-container.component';

describe('InformesResumenDieciochoContainerComponent', () => {
  let component: InformesResumenDieciochoContainerComponent;
  let fixture: ComponentFixture<InformesResumenDieciochoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenDieciochoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenDieciochoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
