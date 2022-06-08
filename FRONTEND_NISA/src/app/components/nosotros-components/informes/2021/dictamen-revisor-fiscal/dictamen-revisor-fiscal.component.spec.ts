import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalComponent } from './dictamen-revisor-fiscal.component';

describe('DictamenRevisorFiscalComponent', () => {
  let component: DictamenRevisorFiscalComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
