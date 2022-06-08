import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaCognitivaComponent } from './prueba-cognitiva.component';

describe('PruebaCognitivaComponent', () => {
  let component: PruebaCognitivaComponent;
  let fixture: ComponentFixture<PruebaCognitivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaCognitivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaCognitivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
