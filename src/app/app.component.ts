import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio2';

  constructor(private router: Router)
  {

  }

  irABienvenido()
  {
    this.router.navigate(['/','bienvenido']);
  }

  irALogin()
  {
    this.router.navigate(['/','login']);
  }

  irAError()
  {
    this.router.navigate(['/','error']);
  }
}
