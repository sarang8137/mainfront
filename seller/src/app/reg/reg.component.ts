import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  constructor(private fb:FormBuilder,private ds:DataService){
  }

  regForm=this.fb.group({
    email:['',[Validators.required]],
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+')]],
    cpassword:['',Validators.required]
  })

  submitted(){
    if(this.regForm.valid){
      // console.log(this.regForm)
      // console.log(this.regForm.value)
      // console.log(this.regForm.controls.email.value)
      // console.log(this.regForm.valid)
      let username=this.regForm.controls.username.value
      let email=this.regForm.controls.email.value
      let pass1=this.regForm.controls.password.value
      let pass2=this.regForm.controls.cpassword.value

      if(pass1 == pass2){
        this.ds.signup(email,username,pass1).then(res=>res.json()).then(res=>console.log(res))
      }
      else{
        alert("password mismatches")
      }
    }
    else{
      alert('form is invalid')
      // console.log(this.regForm.get('email')?.valid)
      // console.log(this.regForm.get('username')?.valid)
      // console.log(this.regForm.get('password')?.valid)
      // console.log(this.regForm.get('cpassword')?.valid)
    }
   
  }


}
