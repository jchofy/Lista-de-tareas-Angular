import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { TareasComponent } from '../tareas/tareas.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    TareasComponent,
    FooterComponent
  ],
  exports:[
   CabeceraComponent,  
   TareasComponent,
   FooterComponent
],
  imports: [
    CommonModule
    
  ]
})
export class ListaTareasModule { }
