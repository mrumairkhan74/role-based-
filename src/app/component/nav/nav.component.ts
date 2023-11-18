import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements DoCheck  {
  constructor(
    private router: Router,
    private service: AuthService
  ){}
  isbuttonrequired=false;
  ismenurequired=false;
  ngDoCheck(){
    let currenturl = this.router.url;
    if(currenturl == '/login' || currenturl=='/register' || currenturl=='/'){
    this.ismenurequired=true;
    this.isbuttonrequired=false;}
    else{
    this.ismenurequired=false;
    this.isbuttonrequired=true;
    };
  }
}
