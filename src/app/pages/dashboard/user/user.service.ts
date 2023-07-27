import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient : HttpClient) { }

  findAll(){
    return this.httpclient.get<User[]>(`${environment.api}/api/user`, {observe: "response" });
  }
}
