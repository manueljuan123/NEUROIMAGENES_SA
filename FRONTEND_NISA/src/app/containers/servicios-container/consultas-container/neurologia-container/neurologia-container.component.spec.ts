import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologiaContainerComponent } from './neurologia-container.component';

describe('NeurologiaContainerComponent', () => {
  let component: NeurologiaContainerComponent;
  let fixture: ComponentFixture<NeurologiaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeurologiaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeurologiaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
