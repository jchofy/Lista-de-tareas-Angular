import { leadingComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aniadirTarea(){
    console.log('clic')
    let inputTitulo:any = document.querySelector('.titulo');
    let inputDescripcion:any = document.querySelector('.descripcion');
    let lista = document.querySelector('ul');

   if(inputTitulo.value!="" && inputDescripcion.value!=""){
     

    let li= document.createElement('li');
    let div=document.createElement('div');
    div.innerHTML="<div class='informacion'>Titulo: <p>"+inputTitulo.value+"</p></div><div class='informacion'>Descripción:<p class='descrip'>"+inputDescripcion.value+"</p></div>";
    li.appendChild(div);
    let divImg=document.createElement('div');
   
    let img = document.createElement('img');
    img.src = "./assets/boton-v.png";
    let img2 = document.createElement('img');
    img2.src = "./assets/boton-x.png";
    img.classList.add('imagenes');
    img2.classList.add('imagenes');
    divImg.appendChild(img);
    divImg.appendChild(img2);

    img2.addEventListener('click', function(){
      lista?.removeChild(li);
  })

  img.addEventListener('click', function(){
      li?.classList.toggle('activado');

  })

    li.appendChild(divImg);
    lista?.appendChild(li);
    
    inputTitulo.value="";
    inputDescripcion.value="";
   }
  } 

  borrarTodasTareas(){
    let lista = document.querySelector('ul');
    let li= document.querySelectorAll('li');
    let lis = Array.from(li);

    lis.forEach(li=> lista?.removeChild(li));
  }



 constructor() { }

  ngOnInit(): void {
  }

}

interface Tarea {
  titulo: string;
  descripcion: string;
}