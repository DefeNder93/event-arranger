import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "./models/user.model";

@Injectable({
  providedIn: 'root'
})
export class Api {

  private host = window.location.protocol + '//' + environment.apiHost;

  constructor(private http: HttpClient) {}

  getUsers = () => this.http.get<User[]>(`${this.host}/user/`);
}
