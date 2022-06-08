import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectromiografiaNeuroconduccionComponent } from './electromiografia-neuroconduccion.component';

describe('ElectromiografiaNeuroconduccionComponent', () => {
  let component: ElectromiografiaNeuroconduccionComponent;
  let fixture: ComponentFixture<ElectromiografiaNeuroconduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectromiografiaNeuroconduccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectromiografiaNeuroconduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
