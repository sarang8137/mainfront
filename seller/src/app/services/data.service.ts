import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  signup(email:any,username:any,password:any){

    let data={
      email,
      username,
      password
    }

  return fetch('http://127.0.0.1:8000/owner/user/', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

  }
  signin(username:any,password:any){
    let data={
      username,
      password
    }
    return fetch('http://127.0.0.1:8000/owner/token', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    
  }
  getProduct(){
    return fetch('http://127.0.0.1:8000/owner/productmv/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
  addProduct(data:any){
    return fetch('http://127.0.0.1:8000/owner/productmv/', {
      method: 'POST',
      body:data,
      headers: {
        // 'Content-type': 'application/json; charset=UTF-8',
        'Accept':'*/*',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }

  deleteProduct(id:any){
    return fetch(`http://127.0.0.1:8000/owner/productmv/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
  getSpecificProduct(id:any){
    return fetch(`http://127.0.0.1:8000/owner/productmv/${id}/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
  updateProduct(id:any,data:any){
    return fetch(`http://127.0.0.1:8000/owner/productmv/${id}/`, {
      method: 'PATCH',
      body:data,
      headers: {
        // 'Content-type': 'application/json; charset=UTF-8',
        'Accept':'*/*',
        'Authorization':`Token ${localStorage.getItem('token')}`
      },
    })
  }
}
