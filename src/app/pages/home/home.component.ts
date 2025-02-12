import { Component } from '@angular/core';
import { TarjetaComponent } from '../../shared/tarjeta/tarjeta.component';
import { IntroComponent } from '../../shared/intro/intro.component';

@Component({
  selector: 'app-home',
  imports: [TarjetaComponent,IntroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
