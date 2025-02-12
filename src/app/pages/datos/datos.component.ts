import { Component } from '@angular/core';
import { IntroComponent } from '../../shared/intro/intro.component';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-datos',
  imports: [IntroComponent,TableComponent],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {

}
