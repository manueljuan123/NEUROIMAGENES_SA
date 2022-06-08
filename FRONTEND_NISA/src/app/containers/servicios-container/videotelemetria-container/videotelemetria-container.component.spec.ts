import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotelemetriaContainerComponent } from './videotelemetria-container.component';

describe('VideotelemetriaContainerComponent', () => {
  let component: VideotelemetriaContainerComponent;
  let fixture: ComponentFixture<VideotelemetriaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideotelemetriaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotelemetriaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
