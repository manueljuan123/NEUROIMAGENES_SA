import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesResumenVeinteContainerComponent } from './informes-resumen-veinte-container.component';

describe('InformesResumenVeinteContainerComponent', () => {
  let component: InformesResumenVeinteContainerComponent;
  let fixture: ComponentFixture<InformesResumenVeinteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesResumenVeinteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesResumenVeinteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
