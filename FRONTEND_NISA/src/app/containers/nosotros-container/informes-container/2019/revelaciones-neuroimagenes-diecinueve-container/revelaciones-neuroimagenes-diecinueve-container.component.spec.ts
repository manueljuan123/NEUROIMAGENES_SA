import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesDiecinueveContainerComponent } from './revelaciones-neuroimagenes-diecinueve-container.component';

describe('RevelacionesNeuroimagenesDiecinueveContainerComponent', () => {
  let component: RevelacionesNeuroimagenesDiecinueveContainerComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesDiecinueveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesDiecinueveContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesDiecinueveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
