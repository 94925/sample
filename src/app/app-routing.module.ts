import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './material/material.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path:"",redirectTo: "/home", pathMatch:'full'
  },
  {path:"home", component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'material',component:MaterialComponent},
  {path: 'user',component:UserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
