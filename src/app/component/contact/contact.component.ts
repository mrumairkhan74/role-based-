import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(
    private builder: FormBuilder, 
    private toastr:ToastrService,
    private service:AuthService,
    private router: Router
    ){

  }

  contactForm=this.builder.group({
    name:this.builder.control('', Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required, Validators.email])),
    select:this.builder.control('male'),
    subject:this.builder.control('',Validators.required),
    message:this.builder.control('',Validators.required),

  });

  contact(){
    if(this.contactForm.valid){
      this.service.proceedcontact(this.contactForm.value).subscribe(res=>{
        this.toastr.success('Please Contact Admin for enable Access','Register Successfully');
        this.router.navigate(['/login'])
      })
    } else{
      this.toastr.warning('Please enter valid Data!')
    }
  }

}
