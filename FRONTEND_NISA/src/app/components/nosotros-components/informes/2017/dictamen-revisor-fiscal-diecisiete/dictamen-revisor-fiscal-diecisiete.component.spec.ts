import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalDiecisieteComponent } from './dictamen-revisor-fiscal-diecisiete.component';

describe('DictamenRevisorFiscalDiecisieteComponent', () => {
  let component: DictamenRevisorFiscalDiecisieteComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalDiecisieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalDiecisieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalDiecisieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
