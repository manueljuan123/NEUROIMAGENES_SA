import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotencialesEvocadosContainerComponent } from './potenciales-evocados-container.component';

describe('PotencialesEvocadosContainerComponent', () => {
  let component: PotencialesEvocadosContainerComponent;
  let fixture: ComponentFixture<PotencialesEvocadosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotencialesEvocadosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotencialesEvocadosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
