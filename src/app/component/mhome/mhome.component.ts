import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-mhome',
  templateUrl: './mhome.component.html',
  styleUrls: ['./mhome.component.css']
})
export class MhomeComponent {
constructor(
  private service: AuthService,
  private router: Router,
  private form:FormBuilder

){

}

}
