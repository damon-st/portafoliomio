import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger?.addEventListener('click', function(){
      hamburger.classList.toggle('active');
      navMenu?.classList.toggle('active');
    });


    const navLink = document.querySelectorAll('.nav-link');

    navLink.forEach(n => n.addEventListener('click',function(){
        hamburger?.classList.toggle('active');
        navMenu?.classList.toggle('active')
    }));

  }

}
