import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotencialesEvocadosComponent } from './potenciales-evocados.component';

describe('PotencialesEvocadosComponent', () => {
  let component: PotencialesEvocadosComponent;
  let fixture: ComponentFixture<PotencialesEvocadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotencialesEvocadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotencialesEvocadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
