import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolosAtencionDiferencialComponent } from './protocolos-atencion-diferencial.component';

describe('ProtocolosAtencionDiferencialComponent', () => {
  let component: ProtocolosAtencionDiferencialComponent;
  let fixture: ComponentFixture<ProtocolosAtencionDiferencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocolosAtencionDiferencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolosAtencionDiferencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
