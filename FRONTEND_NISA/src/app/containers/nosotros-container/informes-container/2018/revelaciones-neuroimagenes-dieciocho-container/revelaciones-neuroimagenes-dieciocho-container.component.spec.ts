import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesDieciochoContainerComponent } from './revelaciones-neuroimagenes-dieciocho-container.component';

describe('RevelacionesNeuroimagenesDieciochoContainerComponent', () => {
  let component: RevelacionesNeuroimagenesDieciochoContainerComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesDieciochoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesDieciochoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesDieciochoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
