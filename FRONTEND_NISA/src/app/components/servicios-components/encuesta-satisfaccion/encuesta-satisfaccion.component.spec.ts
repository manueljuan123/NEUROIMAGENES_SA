import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EncuestaSatisfaccionComponent } from './encuesta-satisfaccion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EncuestaSatisfaccionComponent', () => {
  let component: EncuestaSatisfaccionComponent;
  let fixture: ComponentFixture<EncuestaSatisfaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaSatisfaccionComponent ],
      imports : [ReactiveFormsModule,
                 FormsModule,
                HttpClientTestingModule]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaSatisfaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
