import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosVeinteComponent } from './estados-veinte.component';

describe('EstadosVeinteComponent', () => {
  let component: EstadosVeinteComponent;
  let fixture: ComponentFixture<EstadosVeinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosVeinteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosVeinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
