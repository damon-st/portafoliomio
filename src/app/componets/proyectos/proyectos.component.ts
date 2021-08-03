import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  detalleProyecto(id:any){
    this.router.navigate(['/proyectos/detalles', id]);
  }
}
