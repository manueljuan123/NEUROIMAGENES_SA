import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpssProtocolosAtencionDiferencialComponent } from './ppss-protocolos-atencion-diferencial.component';

describe('PpssProtocolosAtencionDiferencialComponent', () => {
  let component: PpssProtocolosAtencionDiferencialComponent;
  let fixture: ComponentFixture<PpssProtocolosAtencionDiferencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpssProtocolosAtencionDiferencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpssProtocolosAtencionDiferencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
