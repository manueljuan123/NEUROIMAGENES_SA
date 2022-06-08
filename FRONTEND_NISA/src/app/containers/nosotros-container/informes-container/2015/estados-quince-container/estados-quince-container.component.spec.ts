import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosQuinceContainerComponent } from './estados-quince-container.component';

describe('EstadosQuinceContainerComponent', () => {
  let component: EstadosQuinceContainerComponent;
  let fixture: ComponentFixture<EstadosQuinceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosQuinceContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosQuinceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
