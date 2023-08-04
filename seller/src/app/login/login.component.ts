import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder){
  }

  logForm=this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-z0-9]')]],
  
  })

  submitted(){
    if(this.logForm.valid){
      console.log(this.logForm)
      console.log(this.logForm.value)
      console.log(this.logForm.controls.username.value)
      console.log(this.logForm.valid)
    }
    else{
      alert('form is invalid')
      console.log(this.logForm.get('username')?.valid)
      console.log(this.logForm.get('password')?.valid)

    }
  }



}
