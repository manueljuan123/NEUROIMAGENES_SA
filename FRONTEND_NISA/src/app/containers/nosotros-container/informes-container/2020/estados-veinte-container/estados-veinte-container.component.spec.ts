import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosVeinteContainerComponent } from './estados-veinte-container.component';

describe('EstadosVeinteContainerComponent', () => {
  let component: EstadosVeinteContainerComponent;
  let fixture: ComponentFixture<EstadosVeinteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosVeinteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosVeinteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
