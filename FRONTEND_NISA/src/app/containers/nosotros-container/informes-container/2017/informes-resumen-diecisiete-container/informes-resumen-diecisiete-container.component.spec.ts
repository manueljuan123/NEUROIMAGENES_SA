import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenDiecisieteContainerComponent } from './informes-resumen-diecisiete-container.component';

describe('InformesResumenDiecisieteContainerComponent', () => {
  let component: InformesResumenDiecisieteContainerComponent;
  let fixture: ComponentFixture<InformesResumenDiecisieteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenDiecisieteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenDiecisieteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
