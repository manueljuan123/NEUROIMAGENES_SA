import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoDatosContainerComponent } from './tratamiento-datos-container.component';

describe('TratamientoDatosContainerComponent', () => {
  let component: TratamientoDatosContainerComponent;
  let fixture: ComponentFixture<TratamientoDatosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoDatosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoDatosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
