import { TestBed } from '@angular/core/testing';

import { Notifications } from './notifications.service';

describe('NotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Notifications = TestBed.get(Notifications);
    expect(service).toBeTruthy();
  });
});
