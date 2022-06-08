import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalVeinteComponent } from './dictamen-revisor-fiscal-veinte.component';

describe('DictamenRevisorFiscalVeinteComponent', () => {
  let component: DictamenRevisorFiscalVeinteComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalVeinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalVeinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalVeinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
