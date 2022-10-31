import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../settings/iusers";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) {
  }

  getAllUsers():Observable<IUsers>{
    return this.http.get<IUsers>('http://localhost:3000/users');
  }
}
