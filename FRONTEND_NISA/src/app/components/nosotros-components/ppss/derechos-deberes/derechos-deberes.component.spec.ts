import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechosDeberesComponent } from './derechos-deberes.component';

describe('DerechosDeberesComponent', () => {
  let component: DerechosDeberesComponent;
  let fixture: ComponentFixture<DerechosDeberesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerechosDeberesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerechosDeberesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
