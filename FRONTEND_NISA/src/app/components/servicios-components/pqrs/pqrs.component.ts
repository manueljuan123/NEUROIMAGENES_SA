import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../../../services/email/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {

  form! : FormGroup;

  constructor(private fb:FormBuilder, private serviceEmail:EmailService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipo_persona: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tipo_documento: ['', [Validators.required]],
      numero_documento: ['', [Validators.required, Validators.min(0)]],
      direccion: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.min(0)]],
      pqrs: ['', [Validators.required]],
      tratamiento_datos: [false, Validators.requiredTrue]
    })
  }

limpiarFormulario(){
  this.form.patchValue({
    tipo_persona:'',
    nombre:'',
    email:'',
    tipo_documento:'',
    numero_documento:'',
    direccion:'',
    celular:'',
    pqrs:'',
    tratamiento_datos: ''
  })
}

async submit(){
  Swal.fire({
    title: 'Cargando...',
    html: 'Tu PQRS está cargando, espera por favor.',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    }
  });
  this.serviceEmail.enviar_pqrs_post(this.form.value)
  .subscribe(
    res => {
      Swal.fire({
        title:"Muchas gracias",
        text: "Estaremos respondiendo prontamente tu PQRS.",
        icon: "success",
        showConfirmButton: false,
        timer: 3000
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
