import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurocirugiaContainerComponent } from './neurocirugia-container.component';

describe('NeurocirugiaContainerComponent', () => {
  let component: NeurocirugiaContainerComponent;
  let fixture: ComponentFixture<NeurocirugiaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeurocirugiaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeurocirugiaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
