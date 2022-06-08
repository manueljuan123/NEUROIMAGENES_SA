import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalDiecinueveComponent } from './dictamen-revisor-fiscal-diecinueve.component';

describe('DictamenRevisorFiscalDiecinueveComponent', () => {
  let component: DictamenRevisorFiscalDiecinueveComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalDiecinueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalDiecinueveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalDiecinueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
