import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUsers} from "../settings/iusers";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private http:HttpClient) { }

  addLs(user: IUsers) {
    if (localStorage.getItem('users') === null) {
      let data: IUsers[] = [];
      data.unshift(user);
        localStorage.setItem('users', JSON.stringify(data));
    } else {
      let data: IUsers[] = JSON.parse(localStorage.getItem('users') || '[]');
      data.unshift(user);
      localStorage.setItem('users', JSON.stringify(data));
    }
  }

  getLs(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}')
  }
}
