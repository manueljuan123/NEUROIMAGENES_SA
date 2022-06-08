import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesDiecinueveComponent } from './revelaciones-neuroimagenes-diecinueve.component';

describe('RevelacionesNeuroimagenesDiecinueveComponent', () => {
  let component: RevelacionesNeuroimagenesDiecinueveComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesDiecinueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesDiecinueveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesDiecinueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
