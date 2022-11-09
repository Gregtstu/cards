import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import { QuillModule } from 'ngx-quill';
import { SearchPipe } from './settings/search.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreatePageComponent,
    UpdatePageComponent,
    MainLayoutComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    QuillModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
