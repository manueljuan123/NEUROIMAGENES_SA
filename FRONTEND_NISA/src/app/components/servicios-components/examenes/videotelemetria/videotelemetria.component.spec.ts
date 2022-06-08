import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotelemetriaComponent } from './videotelemetria.component';

describe('VideotelemetriaComponent', () => {
  let component: VideotelemetriaComponent;
  let fixture: ComponentFixture<VideotelemetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideotelemetriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotelemetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
