import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabla } from '../../interfaz/tabla';
import { RecursosService } from '../../servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  tablas: Tabla[] = [];
    constructor(
      private recursosService : RecursosService,
      private router : Router,
    ){
      recursosService.obtenerDatosTablas().subscribe(respuesta => {
        this.tablas = respuesta as Array<Tabla>
      })
    }

    obtenerId(id:number){
      this.router.navigate(['detalles', id])
    }
}
