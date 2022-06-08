import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrsContainerComponent } from './pqrs-container.component';

describe('PqrsContainerComponent', () => {
  let component: PqrsContainerComponent;
  let fixture: ComponentFixture<PqrsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PqrsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
