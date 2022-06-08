import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenServiciosContainerComponent } from './resumen-servicios-container.component';

describe('ResumenServiciosContainerComponent', () => {
  let component: ResumenServiciosContainerComponent;
  let fixture: ComponentFixture<ResumenServiciosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenServiciosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenServiciosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
