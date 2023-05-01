import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { last } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {



about(){
  window.scrollTo(0,650);
}
project()
{
    window.scrollTo(0,1850);
}
}
