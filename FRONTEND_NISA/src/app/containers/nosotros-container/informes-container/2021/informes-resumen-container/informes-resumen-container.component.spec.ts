import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenContainerComponent } from './informes-resumen-container.component';

describe('InformesResumenContainerComponent', () => {
  let component: InformesResumenContainerComponent;
  let fixture: ComponentFixture<InformesResumenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
