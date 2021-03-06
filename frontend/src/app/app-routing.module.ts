import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarModule'
  },
  {
    path: '**',
    redirectTo: 'calendar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
