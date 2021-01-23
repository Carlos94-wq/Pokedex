import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionesComponent } from './regiones/regiones.component';
import { LocalizacionesComponent } from './localizaciones/localizaciones.component';



@NgModule({
  declarations: [RegionesComponent, LocalizacionesComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
