import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLambertComponent } from './test-lambert.component';

describe('TestLambertComponent', () => {
  let component: TestLambertComponent;
  let fixture: ComponentFixture<TestLambertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLambertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLambertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
