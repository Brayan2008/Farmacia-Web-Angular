import { Component } from '@angular/core';
import { BotonModulo } from './boton-modulo/boton-modulo';
import { Usuario } from '../usuario';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  imports: [BotonModulo, UpperCasePipe, TitleCasePipe, RouterOutlet, RouterLink],
  templateUrl: './menu-principal.html',
  styleUrl: './menu-principal.css'
})
export class MenuPrincipal {
  user: Usuario = {
    nombre: 'Cervan Cabrera',
    correo: 'bmaster20082005@gmail.com',
    rol: 'admin'
  }
}
