import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalDieciochoComponent } from './dictamen-revisor-fiscal-dieciocho.component';

describe('DictamenRevisorFiscalDieciochoComponent', () => {
  let component: DictamenRevisorFiscalDieciochoComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalDieciochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalDieciochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalDieciochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
