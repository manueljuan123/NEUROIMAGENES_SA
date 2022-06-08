import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesSomosContainerComponent } from './quienes-somos-container.component';

describe('QuienesSomosContainerComponent', () => {
  let component: QuienesSomosContainerComponent;
  let fixture: ComponentFixture<QuienesSomosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienesSomosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesSomosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
