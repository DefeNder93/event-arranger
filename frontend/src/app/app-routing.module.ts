import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'booking',
    loadChildren: './booking/booking.module#BookingModule'
  },
  {
    path: '**',
    redirectTo: 'booking'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
