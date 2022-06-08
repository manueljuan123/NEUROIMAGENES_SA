import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroencefalogramaComponent } from './electroencefalograma.component';

describe('ElectroencefalogramaComponent', () => {
  let component: ElectroencefalogramaComponent;
  let fixture: ComponentFixture<ElectroencefalogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectroencefalogramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroencefalogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
