import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropediatriaContainerComponent } from './neuropediatria-container.component';

describe('NeuropediatriaContainerComponent', () => {
  let component: NeuropediatriaContainerComponent;
  let fixture: ComponentFixture<NeuropediatriaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuropediatriaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuropediatriaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
