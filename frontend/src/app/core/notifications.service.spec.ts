import { TestBed } from '@angular/core/testing';
import { Notifications } from './notifications.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SimpleNotificationsModule} from 'angular2-notifications';
import 'jest';

describe('NotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      CommonModule,
      HttpClientModule,
      SimpleNotificationsModule.forRoot(),
    ],
    providers: [
    ]

  }));

  test('should be created', () => {
    const service: Notifications = TestBed.get(Notifications);
    expect(service).toBeTruthy();
  });
});
