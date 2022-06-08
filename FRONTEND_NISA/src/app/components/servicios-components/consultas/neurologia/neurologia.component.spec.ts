import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologiaComponent } from './neurologia.component';

describe('NeurologiaComponent', () => {
  let component: NeurologiaComponent;
  let fixture: ComponentFixture<NeurologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeurologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeurologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
