import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesComponent } from './revelaciones-neuroimagenes.component';

describe('RevelacionesNeuroimagenesComponent', () => {
  let component: RevelacionesNeuroimagenesComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
