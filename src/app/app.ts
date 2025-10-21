import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Usuario } from './usuario';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { BotonModulo } from './boton-modulo/boton-modulo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, UpperCasePipe, BotonModulo, TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  user: Usuario = {
    nombre: 'Brayan Master',
    correo: 'bmaster20082005@gmail.com',
    rol: 'admin'
  }
  
}
