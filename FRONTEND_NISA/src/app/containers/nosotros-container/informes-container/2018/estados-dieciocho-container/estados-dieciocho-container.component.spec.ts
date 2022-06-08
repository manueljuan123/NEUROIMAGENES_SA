import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDieciochoContainerComponent } from './estados-dieciocho-container.component';

describe('EstadosDieciochoContainerComponent', () => {
  let component: EstadosDieciochoContainerComponent;
  let fixture: ComponentFixture<EstadosDieciochoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosDieciochoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosDieciochoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
