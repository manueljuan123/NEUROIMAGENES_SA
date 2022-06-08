import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroencefalogramaContainerComponent } from './electroencefalograma-container.component';

describe('ElectroencefalogramaContainerComponent', () => {
  let component: ElectroencefalogramaContainerComponent;
  let fixture: ComponentFixture<ElectroencefalogramaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectroencefalogramaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroencefalogramaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
