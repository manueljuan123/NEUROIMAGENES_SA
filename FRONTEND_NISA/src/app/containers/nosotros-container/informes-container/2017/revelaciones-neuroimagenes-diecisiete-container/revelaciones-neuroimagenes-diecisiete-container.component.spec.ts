import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesDiecisieteContainerComponent } from './revelaciones-neuroimagenes-diecisiete-container.component';

describe('RevelacionesNeuroimagenesDiecisieteContainerComponent', () => {
  let component: RevelacionesNeuroimagenesDiecisieteContainerComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesDiecisieteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesDiecisieteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesDiecisieteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
