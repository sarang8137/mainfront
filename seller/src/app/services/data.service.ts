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

}
