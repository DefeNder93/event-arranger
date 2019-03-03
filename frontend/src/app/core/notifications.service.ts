import { Injectable } from '@angular/core';
import {NotificationsService} from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class Notifications {
  constructor (private notifications: NotificationsService) {}

  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  serverErrorOptions = {
    timeOut: 20000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  success = (body, title = 'Success') => this.notifications.success(title, body, this.options);

  error = (body, title = 'Error') => this.notifications.error(title, body, this.options);

  info = (body, title = 'Info') => this.notifications.info(title, body, this.options);

  warn = (body, title = 'Warn') => this.notifications.warn(title, body, this.options);

  serverError = (body, e?, title = 'Server Error') => this.notifications.error(title, this.buildError(e, body), this.serverErrorOptions);

  notSavedServerError = (entityName, e?, title = 'Server Error') => this.notifications.error(title, this.buildError(e, entityName + ' was not saved. Please try again.', entityName), this.serverErrorOptions);

  notLoadedServerError = (entityName, were = false, e?, title = 'Server Error') =>
    this.notifications.error(title, this.buildError(e, entityName + ' ' + (were ? 'were' : 'was') + ' not loaded. Please try to reload the page.', entityName), this.serverErrorOptions);

  notDeletedServerError = (entityName, title = 'Server Error') => this.notifications.error(title, entityName + ' was not deleted. Please try again', this.serverErrorOptions);

  saved = (entityName, were = false, title = 'Success') => this.notifications.success(title, entityName + ' ' + (were ? 'were' : 'was') + ' successfully saved', this.options);

  notImplemented = (featureName) => this.warn('Sorry, the ' + featureName + ' functionality is not yet implemented.');

  private buildError = (e, defaultMsg, entityName?) => {
    let serverMsg;
    if (e && e.status === 403) {
      serverMsg = 'Access to ' + entityName + ' is forbidden for this user.';
    }
    return this.capitalizeFirstLetter(serverMsg ? serverMsg : defaultMsg);
  }

  private capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

}
