import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {MenuComponent} from "./menu/menu.component";
import {HttpLoaderFactory} from "./app.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {metaReducers, reducers} from "./reducers";

import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SimpleNotificationsModule} from 'angular2-notifications';
import { EffectsModule } from '@ngrx/effects';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {APP_BASE_HREF} from '@angular/common';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        BrowserAnimationsModule,
        LayoutModule,
        SharedModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        SimpleNotificationsModule.forRoot(),
        EffectsModule.forRoot([]),
        CalendarModule.forRoot({
          provide: DateAdapter,
          useFactory: adapterFactory
        })
      ],
      declarations: [
        AppComponent,
        MenuComponent
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/src/app'}],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
