import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAboutUsComponent } from './mini-about-us.component';

describe('MiniAboutUsComponent', () => {
  let component: MiniAboutUsComponent;
  let fixture: ComponentFixture<MiniAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
