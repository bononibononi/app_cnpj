import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Busca por Cnpj';

  constructor(
    private router: Router
  ){}

  hideButtons(){
    return this.router.url !== '/cnpj';
   }
}