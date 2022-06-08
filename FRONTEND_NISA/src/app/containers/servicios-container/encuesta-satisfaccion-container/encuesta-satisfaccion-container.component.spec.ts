import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaSatisfaccionContainerComponent } from './encuesta-satisfaccion-container.component';

describe('EncuestaSatisfaccionContainerComponent', () => {
  let component: EncuestaSatisfaccionContainerComponent;
  let fixture: ComponentFixture<EncuestaSatisfaccionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaSatisfaccionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaSatisfaccionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
