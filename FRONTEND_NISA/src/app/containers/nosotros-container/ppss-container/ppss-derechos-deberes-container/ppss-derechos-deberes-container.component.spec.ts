import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpssDerechosDeberesContainerComponent } from './ppss-derechos-deberes-container.component';

describe('PpssDerechosDeberesContainerComponent', () => {
  let component: PpssDerechosDeberesContainerComponent;
  let fixture: ComponentFixture<PpssDerechosDeberesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpssDerechosDeberesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpssDerechosDeberesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
