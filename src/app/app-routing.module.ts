import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {CreatePageComponent} from "./pages/create-page/create-page.component";
import {UpdatePageComponent} from "./pages/update-page/update-page.component";
import {MainLayoutComponent} from "./pages/main-layout/main-layout.component";

const routes: Routes = [
  {
    path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'/', pathMatch:"full"},
      {path:'', component:MainPageComponent},
      {path:'create', component:CreatePageComponent},
      {path:'update/:id', component:UpdatePageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
