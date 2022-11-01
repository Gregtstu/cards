import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUsers} from "../settings/iusers";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private http: HttpClient) {
  }

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

  removeLs(id: string): void {
    let data: IUsers[] = JSON.parse(localStorage.getItem('users') || '[]');
    data = data.filter(item => item.id != id);
    localStorage.setItem('users', JSON.stringify(data));
  }

  editLS(id: string, obj: IUsers) {
    let data: IUsers[] = JSON.parse(localStorage.getItem('users') || '[]');
    data.map(item => {
      if (item.id == id) {
        item.author.fio = obj.author.fio;
        item.author.post = obj.author.post;
        item.author.account = obj.author.account;
        item.docCode = obj.docCode;
        item.address = obj.address;
        item.docName = obj.docName;
        item.docType = obj.docType;
      }
    });
    localStorage.setItem('users', JSON.stringify(data));
  }

  compliteLS(id: string) {
    let data: IUsers[] = JSON.parse(localStorage.getItem('users') || '[]');
    data.map(item => {
      if (item.id == id && item.isSpecial === false) {
        item.isSpecial = true;
      }
    });
    localStorage.setItem('users', JSON.stringify(data));
  }


}


