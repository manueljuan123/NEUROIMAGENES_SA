import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneacionCovid19Component } from './planeacion-covid19.component';

describe('PlaneacionCovid19Component', () => {
  let component: PlaneacionCovid19Component;
  let fixture: ComponentFixture<PlaneacionCovid19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneacionCovid19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneacionCovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
