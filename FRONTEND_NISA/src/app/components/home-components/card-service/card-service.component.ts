import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CounterService } from '../../../services/counter/counter.service';

@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.css']
})
export class CardServiceComponent implements OnInit {

  users : any;

  constructor(private counter:CounterService) { }

  ngOnInit(): void {
    this.counter.contador_get().subscribe(res => {
      Swal.fire({
        imageUrl: '../../../../assets/img/emergente/politica.jpeg',
        imageWidth: 2480,
        imageHeight: 500,
        imageAlt: 'Seguridad del paciente',
        timer: 20000,
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#030A8C",
        showConfirmButton: true,
        
      }),
      this.users = res;
    })
    }


}
