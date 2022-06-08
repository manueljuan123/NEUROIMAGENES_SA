import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpssPlaneacionCovid19ContainerComponent } from './ppss-planeacion-covid19-container.component';

describe('PpssPlaneacionCovid19ContainerComponent', () => {
  let component: PpssPlaneacionCovid19ContainerComponent;
  let fixture: ComponentFixture<PpssPlaneacionCovid19ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpssPlaneacionCovid19ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpssPlaneacionCovid19ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
