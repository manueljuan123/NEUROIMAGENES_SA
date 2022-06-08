import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDiecisieteComponent } from './estados-diecisiete.component';

describe('EstadosDiecisieteComponent', () => {
  let component: EstadosDiecisieteComponent;
  let fixture: ComponentFixture<EstadosDiecisieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosDiecisieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosDiecisieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
