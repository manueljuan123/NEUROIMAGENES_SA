import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDiecisieteContainerComponent } from './estados-diecisiete-container.component';

describe('EstadosDiecisieteContainerComponent', () => {
  let component: EstadosDiecisieteContainerComponent;
  let fixture: ComponentFixture<EstadosDiecisieteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosDiecisieteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosDiecisieteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
