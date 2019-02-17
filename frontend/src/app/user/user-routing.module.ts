import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from "./components/add/add.component";
import {UserComponent} from "./components/user/user.component";

const routes: Routes = [
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'list',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
