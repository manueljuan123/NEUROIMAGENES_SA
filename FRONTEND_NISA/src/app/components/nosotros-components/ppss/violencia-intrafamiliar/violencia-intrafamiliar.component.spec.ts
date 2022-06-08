import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolenciaIntrafamiliarComponent } from './violencia-intrafamiliar.component';

describe('ViolenciaIntrafamiliarComponent', () => {
  let component: ViolenciaIntrafamiliarComponent;
  let fixture: ComponentFixture<ViolenciaIntrafamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolenciaIntrafamiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolenciaIntrafamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
