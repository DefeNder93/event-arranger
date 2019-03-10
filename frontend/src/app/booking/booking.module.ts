import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { EventComponent } from './event/event.component';
import {CalendarHeaderComponent} from "./calendar-header/calendar-header.component";
import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [
    EventComponent,
    CalendarHeaderComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    CalendarModule
  ]
})
export class BookingModule { }
