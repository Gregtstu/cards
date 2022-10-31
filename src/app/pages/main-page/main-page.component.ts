import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {IUsers} from "../../settings/iusers";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public data!: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private apiServ:ApiService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers():void{
    this.apiServ.getAllUsers()
      .subscribe({
        next: (res) => {
          this.data = res;
        },
        error: (err) => {
          alert('Список пуст! Добавьте новых пользователей!')
        }
      });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }
}
