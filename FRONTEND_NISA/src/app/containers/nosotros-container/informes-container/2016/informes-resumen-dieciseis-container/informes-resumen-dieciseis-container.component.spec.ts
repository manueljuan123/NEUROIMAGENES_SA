import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenDieciseisContainerComponent } from './informes-resumen-dieciseis-container.component';

describe('InformesResumenDieciseisContainerComponent', () => {
  let component: InformesResumenDieciseisContainerComponent;
  let fixture: ComponentFixture<InformesResumenDieciseisContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenDieciseisContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenDieciseisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
