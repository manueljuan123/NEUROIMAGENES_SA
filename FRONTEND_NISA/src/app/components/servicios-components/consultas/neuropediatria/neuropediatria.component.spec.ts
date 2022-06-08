import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropediatriaComponent } from './neuropediatria.component';

describe('NeuropediatriaComponent', () => {
  let component: NeuropediatriaComponent;
  let fixture: ComponentFixture<NeuropediatriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeuropediatriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuropediatriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
