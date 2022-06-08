import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenQuinceContainerComponent } from './informes-resumen-quince-container.component';

describe('InformesResumenQuinceContainerComponent', () => {
  let component: InformesResumenQuinceContainerComponent;
  let fixture: ComponentFixture<InformesResumenQuinceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenQuinceContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenQuinceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
