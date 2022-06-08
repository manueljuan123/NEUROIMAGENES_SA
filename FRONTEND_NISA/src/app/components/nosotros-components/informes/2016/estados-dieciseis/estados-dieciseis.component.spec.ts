import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDieciseisComponent } from './estados-dieciseis.component';

describe('EstadosDieciseisComponent', () => {
  let component: EstadosDieciseisComponent;
  let fixture: ComponentFixture<EstadosDieciseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosDieciseisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosDieciseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
