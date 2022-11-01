import { Pipe, PipeTransform } from '@angular/core';
import {IUsers} from "./iusers";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: IUsers[], userLogin = ''): any {
    if(!userLogin.trim()){
      return users;
    }else {
      return users.filter(item =>{
        return item.author.account.toLowerCase().includes(userLogin.toLowerCase());
      });
    }
  }

}
