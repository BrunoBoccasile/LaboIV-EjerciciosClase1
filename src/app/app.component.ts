import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './componentes/usuario';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BienvenidoComponent, ErrorComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosClase1';
  edadUno!: number;
  edadDos!: number;
  suma!: number | string;
  promedio!: number | string;

  sumar()
  {
    this.suma = this.edadUno + this.edadDos;
    console.log("suma: " +this.suma);
  }

  promediar()
  {
    this.promedio = (this.edadUno + this.edadDos) / 2;
    console.log("promedio: " + this.promedio);
  }

  limpiar()
  {
    this.suma = "";
    this.promedio = "";
  }
}

