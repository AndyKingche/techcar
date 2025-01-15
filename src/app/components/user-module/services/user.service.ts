import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = `${environment.url}api/user`;

  constructor(private http: HttpClient) { }

  getUsers(){
    console.log(`${this.URL}`);
    
    return this.http.get(`${this.URL}`);
  }
}
