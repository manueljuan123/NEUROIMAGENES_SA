import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLambertContainerComponent } from './test-lambert-container.component';

describe('TestLambertContainerComponent', () => {
  let component: TestLambertContainerComponent;
  let fixture: ComponentFixture<TestLambertContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLambertContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLambertContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
