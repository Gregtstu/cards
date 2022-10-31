import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { UpdatePageComponent } from './pages/update-page/update-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CreatePageComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
