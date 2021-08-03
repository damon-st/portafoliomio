import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosI } from 'src/app/model/proyectos.model';

import datos from 'src/assets/json/infor.json';

@Component({
  selector: 'app-detallesproyectos',
  templateUrl: './detallesproyectos.component.html',
  styleUrls: ['./detallesproyectos.component.css'],
})
export class DetallesproyectosComponent implements OnInit {

  
  proyectos:ProyectosI[] = datos;
  
  informacion: ProyectosI= { repositorio:'',titulo:'',funciones:[],imagenes:[],descripcion:'',id:0,librerias:[]};

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.getProyecto(id);
    
  }

  getProyecto(id:any): void{    
    this.proyectos.forEach(v => {
      if(v.id == id){
        this.informacion = v;
      }
    })
  }

}
