import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalDieciochoContainerComponent } from './dictamen-revisor-fiscal-dieciocho-container.component';

describe('DictamenRevisorFiscalDieciochoContainerComponent', () => {
  let component: DictamenRevisorFiscalDieciochoContainerComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalDieciochoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalDieciochoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalDieciochoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
