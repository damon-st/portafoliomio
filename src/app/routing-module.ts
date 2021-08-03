import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ContactosComponent } from "./componets/contactos/contactos.component";
import { DetallesproyectosComponent } from "./componets/detallesproyectos/detallesproyectos.component";
import { InicioComponent } from "./componets/inicio/inicio.component";
import { ProyectosComponent } from "./componets/proyectos/proyectos.component";



const routes: Routes = [
    {path: 'inicio', component:InicioComponent},
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: 'proyectos', component:ProyectosComponent},
    {path: 'proyectos/detalles/:id',component:DetallesproyectosComponent},
    {path: 'contactos', component:ContactosComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule{}