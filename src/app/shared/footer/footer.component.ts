import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  texto1:String="Album example is &copy; Bootstrap, but please download and customize it for yourself!"
  texto2:String="New to Bootstrap? "
  texto3:String="Visit the homepage"
  texto4:String=" or read our "
  texto5:string="getting started guide"
}
