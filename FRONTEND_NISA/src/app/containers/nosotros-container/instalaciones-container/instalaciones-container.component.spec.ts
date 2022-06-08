import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesContainerComponent } from './instalaciones-container.component';

describe('InstalacionesContainerComponent', () => {
  let component: InstalacionesContainerComponent;
  let fixture: ComponentFixture<InstalacionesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstalacionesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
