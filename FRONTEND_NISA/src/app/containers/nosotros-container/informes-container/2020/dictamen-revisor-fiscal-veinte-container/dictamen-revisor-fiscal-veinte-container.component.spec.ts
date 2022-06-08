import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictamenRevisorFiscalVeinteContainerComponent } from './dictamen-revisor-fiscal-veinte-container.component';

describe('DictamenRevisorFiscalVeinteContainerComponent', () => {
  let component: DictamenRevisorFiscalVeinteContainerComponent;
  let fixture: ComponentFixture<DictamenRevisorFiscalVeinteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictamenRevisorFiscalVeinteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictamenRevisorFiscalVeinteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
