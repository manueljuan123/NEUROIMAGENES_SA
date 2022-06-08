import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisiatriaComponent } from './fisiatria.component';

describe('FisiatriaComponent', () => {
  let component: FisiatriaComponent;
  let fixture: ComponentFixture<FisiatriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FisiatriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FisiatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
