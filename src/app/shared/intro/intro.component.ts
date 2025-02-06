import { Component } from '@angular/core';
import { Foto } from '../../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
  providers: [RecursosService]
})
export class IntroComponent {
  /**titulo:String="AlbumExample"
  parrafo:String="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip"
  boton1:String="Main call to action"
  boton2:String="Secondary action"*/

  fotos: Foto[] = [];
  fotoDestacada: Foto | null = null;

  constructor(recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    })

    //this.fotoDestacada = this.fotos.find(foto => foto.id === "55e7dc434957a814f1dc8460962e33791c3ad6e04e507440742a7ad6964bc1_640") || null;

    //Eliminar foto del array

    //this.fotos = this.fotos.filter(foto => foto.id !== "55e7dc434957a814f1dc8460962e33791c3ad6e04e507440742a7ad6964bc1_640");
  }
}
