import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {Subject} from 'rxjs';
import {colors} from "../../core/consts/colors";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  ngOnInit() {
  }

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [{
      title: 'Draggable event',
      color: colors.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'A non draggable event',
      color: colors.blue,
      start: new Date()
    }];

  refresh: Subject<any> = new Subject();

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

}
