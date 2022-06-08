import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisiatriaContainerComponent } from './fisiatria-container.component';

describe('FisiatriaContainerComponent', () => {
  let component: FisiatriaContainerComponent;
  let fixture: ComponentFixture<FisiatriaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FisiatriaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FisiatriaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
