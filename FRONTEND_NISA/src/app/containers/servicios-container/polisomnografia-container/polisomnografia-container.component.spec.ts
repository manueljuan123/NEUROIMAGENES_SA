import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolisomnografiaContainerComponent } from './polisomnografia-container.component';

describe('PolisomnografiaContainerComponent', () => {
  let component: PolisomnografiaContainerComponent;
  let fixture: ComponentFixture<PolisomnografiaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolisomnografiaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolisomnografiaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
