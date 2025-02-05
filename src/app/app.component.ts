import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TarjetaComponent } from './shared/tarjeta/tarjeta.component';
import { IntroComponent } from './shared/intro/intro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContactoComponent,TarjetaComponent,IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newProyecto';
}
