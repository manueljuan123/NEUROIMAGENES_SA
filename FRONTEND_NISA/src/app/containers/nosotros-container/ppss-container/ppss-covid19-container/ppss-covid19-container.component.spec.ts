import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpssCovid19ContainerComponent } from './ppss-covid19-container.component';

describe('PpssCovid19ContainerComponent', () => {
  let component: PpssCovid19ContainerComponent;
  let fixture: ComponentFixture<PpssCovid19ContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpssCovid19ContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpssCovid19ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
