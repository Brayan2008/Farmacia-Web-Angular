import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-boton-modulo',
  imports: [RouterLink],
  templateUrl: './boton-modulo.html',
  styleUrl: './boton-modulo.css'
})
export class BotonModulo {
  nombreModulo = input<string>();
  src = input<string>();
}
