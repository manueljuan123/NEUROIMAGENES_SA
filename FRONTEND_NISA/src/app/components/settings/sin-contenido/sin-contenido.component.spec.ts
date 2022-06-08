import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinContenidoComponent } from './sin-contenido.component';

describe('SinContenidoComponent', () => {
  let component: SinContenidoComponent;
  let fixture: ComponentFixture<SinContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
