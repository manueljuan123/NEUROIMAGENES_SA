import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDieciseisContainerComponent } from './estados-dieciseis-container.component';

describe('EstadosDieciseisContainerComponent', () => {
  let component: EstadosDieciseisContainerComponent;
  let fixture: ComponentFixture<EstadosDieciseisContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosDieciseisContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosDieciseisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
