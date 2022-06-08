import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosResumenContainerComponent } from './nosotros-resumen-container.component';

describe('NosotrosResumenContainerComponent', () => {
  let component: NosotrosResumenContainerComponent;
  let fixture: ComponentFixture<NosotrosResumenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosResumenContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosResumenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
