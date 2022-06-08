import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailService } from '../../../services/email/email.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private serviceEmail: EmailService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
    nombre: ['', [Validators.required]],
    email: ['', [Validators.email]],
    tipo_documento: ['', [Validators.required]],
    numero_documento: ['', [Validators.required, Validators.min(0)]],
    celular1: ['', [Validators.required, Validators.min(0)]],
    celular2: ['', [Validators.min(0)]],
    eps: ['', [Validators.required]],
    servicio: ['', Validators.required],
    mensaje: ['', Validators.required],
    tratamiento_datos: [false, Validators.requiredTrue]
    })
  }

  limpiarFormulario(){
    this.form.patchValue({
      nombre:'',
      email:'',
      tipo_documento:'',
      numero_documento:'',
      celular1:'',
      celular2:'',
      eps:'',
      servicio:'',
      mensaje:'',
      tratamiento_datos:''
    })
  }

  async submit(){
    Swal.fire({
      title: 'Cargando...',
      html: 'Tu petición está cargando, espera por favor.',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });
    this.serviceEmail.enviar_consulta_post(this.form.value)
    .subscribe(
      res => {
        Swal.fire({
          title:"Muchas gracias",
          text: "A tu correo estará llegando la confirmación de tu petición. Estaremos respondiéndola prontamente.",
          icon: "success",
          showConfirmButton: false,
          timer: 6000
        }), this.limpiarFormulario()
      }, err => {
          Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Asegúrese de que esté conectado a internet."
        }), this.limpiarFormulario()
      }
    )
  }

  
  }

  
