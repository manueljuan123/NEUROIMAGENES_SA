import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalDiecisieteContainerComponent } from './dictamen-revisor-fiscal-diecisiete-container.component';

describe('DictamenRevisorFiscalDiecisieteContainerComponent', () => {
  let component: DictamenRevisorFiscalDiecisieteContainerComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalDiecisieteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalDiecisieteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalDiecisieteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
