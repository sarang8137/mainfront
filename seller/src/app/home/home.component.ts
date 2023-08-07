import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pro:any=[]
  constructor(private ds:DataService,private r:Router){
    this.ds.getProduct().then(res=>res.json()).then(res=>this.pro=res)
    console.log(this.pro)
  }

  deletepro(e:any){
    let id=e.target.id
    console.log(id)
    this.ds.deleteProduct(id).then(res=>res.json()).then(res=>{
      alert("Product Deleted")
      // this.r.navigate(['home'])
      this.r.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.r.navigate(['home']);
      });
    }).catch(res=>console.log(res.error))
  }
  editPage(e:any){
    this.r.navigate(['edit',e.target.id])
  }


}
