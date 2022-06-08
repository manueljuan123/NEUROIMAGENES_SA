import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionVisionContainerComponent } from './mision-vision-container.component';

describe('MisionVisionContainerComponent', () => {
  let component: MisionVisionContainerComponent;
  let fixture: ComponentFixture<MisionVisionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisionVisionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionVisionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
