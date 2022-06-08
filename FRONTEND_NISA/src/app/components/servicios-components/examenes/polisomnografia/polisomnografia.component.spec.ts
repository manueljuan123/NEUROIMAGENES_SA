import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolisomnografiaComponent } from './polisomnografia.component';

describe('PolisomnografiaComponent', () => {
  let component: PolisomnografiaComponent;
  let fixture: ComponentFixture<PolisomnografiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolisomnografiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolisomnografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
