import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosQuinceComponent } from './estados-quince.component';

describe('EstadosQuinceComponent', () => {
  let component: EstadosQuinceComponent;
  let fixture: ComponentFixture<EstadosQuinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosQuinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosQuinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
