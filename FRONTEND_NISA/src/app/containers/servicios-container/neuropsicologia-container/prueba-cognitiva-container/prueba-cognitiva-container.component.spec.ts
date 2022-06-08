import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCognitivaContainerComponent } from './prueba-cognitiva-container.component';

describe('PruebaCognitivaContainerComponent', () => {
  let component: PruebaCognitivaContainerComponent;
  let fixture: ComponentFixture<PruebaCognitivaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaCognitivaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaCognitivaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
