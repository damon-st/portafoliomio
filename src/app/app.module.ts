import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { CabeceraComponent } from './componets/cabecera/cabecera.component';
import { InicioComponent } from './componets/inicio/inicio.component';
import { RoutingModule } from './routing-module';
import { ProyectosComponent } from './componets/proyectos/proyectos.component';
import { DetallesproyectosComponent } from './componets/detallesproyectos/detallesproyectos.component';
import { ContactosComponent } from './componets/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    ProyectosComponent,
    DetallesproyectosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
