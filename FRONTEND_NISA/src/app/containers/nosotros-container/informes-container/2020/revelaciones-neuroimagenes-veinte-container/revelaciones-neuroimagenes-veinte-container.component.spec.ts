import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesVeinteContainerComponent } from './revelaciones-neuroimagenes-veinte-container.component';

describe('RevelacionesNeuroimagenesVeinteContainerComponent', () => {
  let component: RevelacionesNeuroimagenesVeinteContainerComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesVeinteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesVeinteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesVeinteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
