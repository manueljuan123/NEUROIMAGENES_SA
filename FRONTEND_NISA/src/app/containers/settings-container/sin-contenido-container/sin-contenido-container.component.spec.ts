import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinContenidoContainerComponent } from './sin-contenido-container.component';

describe('SinContenidoContainerComponent', () => {
  let component: SinContenidoContainerComponent;
  let fixture: ComponentFixture<SinContenidoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinContenidoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinContenidoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
