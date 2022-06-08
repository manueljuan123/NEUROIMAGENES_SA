import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevelacionesNeuroimagenesVeinteComponent } from './revelaciones-neuroimagenes-veinte.component';

describe('RevelacionesNeuroimagenesVeinteComponent', () => {
  let component: RevelacionesNeuroimagenesVeinteComponent;
  let fixture: ComponentFixture<RevelacionesNeuroimagenesVeinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevelacionesNeuroimagenesVeinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevelacionesNeuroimagenesVeinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
