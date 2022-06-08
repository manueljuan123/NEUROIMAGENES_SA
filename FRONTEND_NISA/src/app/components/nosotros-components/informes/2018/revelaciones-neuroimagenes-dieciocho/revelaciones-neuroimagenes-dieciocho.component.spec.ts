import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesDieciochoComponent } from './revelaciones-neuroimagenes-dieciocho.component';

describe('RevelacionesNeuroimagenesDieciochoComponent', () => {
  let component: RevelacionesNeuroimagenesDieciochoComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesDieciochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesDieciochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesDieciochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
