import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesContainerComponent } from './revelaciones-neuroimagenes-container.component';

describe('RevelacionesNeuroimagenesContainerComponent', () => {
  let component: RevelacionesNeuroimagenesContainerComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
