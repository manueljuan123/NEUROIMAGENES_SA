import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalDiecinueveContainerComponent } from './dictamen-revisor-fiscal-diecinueve-container.component';

describe('DictamenRevisorFiscalDiecinueveContainerComponent', () => {
  let component: DictamenRevisorFiscalDiecinueveContainerComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalDiecinueveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalDiecinueveContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalDiecinueveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
