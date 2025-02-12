import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { IntroComponent } from './shared/intro/intro.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
//import { Foto } from './interfaz/foto';
import { FooterComponent } from './shared/footer/footer.component';
import { TableComponent } from './shared/table/table.component';
import { HomeComponent } from './pages/home/home.component';
import { DatosComponent } from './pages/datos/datos.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactoComponent,TarjetaComponent,IntroComponent,HttpClientModule,FooterComponent,TableComponent,HomeComponent,DatosComponent,RouterLink,RouterModule,CommonModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newProyecto';
  /**fotos: Foto[] = [];
  constructor(recursosService : RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    })
  }*/
}
