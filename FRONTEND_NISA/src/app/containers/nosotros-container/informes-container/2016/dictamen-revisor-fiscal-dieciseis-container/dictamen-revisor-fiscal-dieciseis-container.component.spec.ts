import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalDieciseisContainerComponent } from './dictamen-revisor-fiscal-dieciseis-container.component';

describe('DictamenRevisorFiscalDieciseisContainerComponent', () => {
  let component: DictamenRevisorFiscalDieciseisContainerComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalDieciseisContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalDieciseisContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalDieciseisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
