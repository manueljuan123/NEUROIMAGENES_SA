import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesGestionDieciochoContainerComponent } from './informes-gestion-dieciocho-container.component';

describe('InformesGestionDieciochoContainerComponent', () => {
  let component: InformesGestionDieciochoContainerComponent;
  let fixture: ComponentFixture<InformesGestionDieciochoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesGestionDieciochoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesGestionDieciochoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
