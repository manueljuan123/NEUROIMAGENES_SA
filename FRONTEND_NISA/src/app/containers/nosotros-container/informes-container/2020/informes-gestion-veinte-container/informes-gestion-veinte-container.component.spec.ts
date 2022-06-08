import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesGestionVeinteContainerComponent } from './informes-gestion-veinte-container.component';

describe('InformesGestionVeinteContainerComponent', () => {
  let component: InformesGestionVeinteContainerComponent;
  let fixture: ComponentFixture<InformesGestionVeinteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesGestionVeinteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesGestionVeinteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
