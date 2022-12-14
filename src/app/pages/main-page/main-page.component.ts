import { Component, OnInit } from '@angular/core';
import {IUsers} from "../../settings/iusers";
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public category: string = 'Все дела';
  public data!: any;
  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 3;
  public tableSizes: number[] = [3, 6, 9, 12];
  public userLogin: string = '';


  constructor(private localStorageServ:LocalStorageService) {
  }

  ngOnInit(): void {
    this.getUsers('users');
  }

  getUsers(user:string):void{
    this.data =  this.localStorageServ.getLs(user);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers('users');
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers('users');
  }

  remove(id:string) {
    this.localStorageServ.removeLs(id);
    alert('удаление прошло успешно');
    this.getUsers('users');
  }

  complited(id:string) {
    this.localStorageServ.compliteLS(id);
    alert('Помечено, как выполненное!');
    this.getUsers('users');
  }

  toggleCategory(category: string) {
    this.category = category;
    if(this.category == 'Все дела') this.getUsers('users');
    else this.data = this.data.filter((item:IUsers) => item.isSpecial == true);
  }
}
