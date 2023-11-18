import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private service: AuthService,
    private toastr: ToastrService,
    private builder: FormBuilder,
    private router: Router,
  ){}
    userdata:any;

  loginForm= this.builder.group({
    username: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.required),
  })
  login(){
    if(this.loginForm.valid){
      this.service.Getbycode(this.loginForm.value.username).subscribe(res=>{
        this.userdata=res;
        if(this.userdata.password===this.loginForm.value.password){
          if(this.userdata){
            this.router.navigate(['/dashboard'])
          }
          else{
            this.toastr.error('Please Contact Admin', 'Is Active User')
          }
        }else{
          this.toastr.error('Invalid Credentials')
        }
      })
    }
  }

}
