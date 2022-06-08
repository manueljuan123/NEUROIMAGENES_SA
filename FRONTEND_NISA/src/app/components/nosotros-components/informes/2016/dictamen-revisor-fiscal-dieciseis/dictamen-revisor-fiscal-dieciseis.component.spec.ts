import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalDieciseisComponent } from './dictamen-revisor-fiscal-dieciseis.component';

describe('DictamenRevisorFiscalDieciseisComponent', () => {
  let component: DictamenRevisorFiscalDieciseisComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalDieciseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalDieciseisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalDieciseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
