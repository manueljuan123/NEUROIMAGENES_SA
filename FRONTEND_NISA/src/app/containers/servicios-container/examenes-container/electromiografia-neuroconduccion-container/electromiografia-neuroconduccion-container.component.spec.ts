import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectromiografiaNeuroconduccionContainerComponent } from './electromiografia-neuroconduccion-container.component';

describe('ElectromiografiaNeuroconduccionContainerComponent', () => {
  let component: ElectromiografiaNeuroconduccionContainerComponent;
  let fixture: ComponentFixture<ElectromiografiaNeuroconduccionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectromiografiaNeuroconduccionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectromiografiaNeuroconduccionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
