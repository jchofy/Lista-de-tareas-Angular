import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  urlImagen:string = "./assets/Notas.png";
  tituloCabecera:string="LISTADO DE TAREAS";

  constructor() { }

  ngOnInit(): void {
  }

}
