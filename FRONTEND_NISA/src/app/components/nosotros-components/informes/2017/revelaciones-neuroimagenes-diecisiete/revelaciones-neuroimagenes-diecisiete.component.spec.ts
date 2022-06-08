import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesDiecisieteComponent } from './revelaciones-neuroimagenes-diecisiete.component';

describe('RevelacionesNeuroimagenesDiecisieteComponent', () => {
  let component: RevelacionesNeuroimagenesDiecisieteComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesDiecisieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesDiecisieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesDiecisieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
