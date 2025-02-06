import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { IntroComponent } from './shared/intro/intro.component';
//import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
//import { Foto } from './interfaz/foto';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContactoComponent,TarjetaComponent,IntroComponent,HttpClientModule,FooterComponent],
  //providers: [RecursosService],
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
