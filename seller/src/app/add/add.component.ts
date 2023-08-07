import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  file:any;
  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){}

  proForm=this.fb.group({
    name:['',[Validators.required]],
    price:['',[Validators.required]],
    category:['',[Validators.required]],
    description:['',[Validators.required]],
  })

  uploadImage(e:any){
    this.file=e.target.files[0]
    console.log(this.file)
  }
  addPro(){
    console.log(this.proForm.controls.category.value)
    let n:any=this.proForm.controls.name.value
    let p:any=this.proForm.controls.price.value
    let c:any=this.proForm.controls.category.value
    let d:any=this.proForm.controls.description.value

    let formd=new FormData()
    formd.append('product_name',n)
    formd.append('product_price',p)
    formd.append('product_category',c)
    formd.append('product_description',d)
    formd.append('product_image',this.file,this.file.name)

    this.ds.addProduct(formd).then(res=>res.json()).then(res=>{
      if(res){
        alert("Product added Successfully!!")
        this.r.navigate(['home'])
      }
      else{
        alert("Something Wrong")
      }
    })

  }

}
