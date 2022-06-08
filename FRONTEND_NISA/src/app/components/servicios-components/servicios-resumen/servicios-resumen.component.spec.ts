import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenServiciosComponent } from './servicios-resumen.component';

describe('ResumenServiciosComponent', () => {
  let component: ResumenServiciosComponent;
  let fixture: ComponentFixture<ResumenServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
