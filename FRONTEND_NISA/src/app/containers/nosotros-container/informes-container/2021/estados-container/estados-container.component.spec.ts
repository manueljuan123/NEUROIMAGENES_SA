import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosContainerComponent } from './estados-container.component';

describe('EstadosContainerComponent', () => {
  let component: EstadosContainerComponent;
  let fixture: ComponentFixture<EstadosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
