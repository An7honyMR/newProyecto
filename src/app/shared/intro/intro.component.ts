import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  titulo:String="AlbumExample"
  parrafo:String="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip"
  boton1:String="Main call to action"
  boton2:String="Secondary action"
}
