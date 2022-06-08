import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalContainerComponent } from './dictamen-revisor-fiscal-container.component';

describe('DictamenRevisorFiscalContainerComponent', () => {
  let component: DictamenRevisorFiscalContainerComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
