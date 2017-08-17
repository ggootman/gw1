import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { UserApi } from "app/fw/users/user-api";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = false;
  valueApi: ValueApi = new ValueApi();


  errorMessage: string = "";
  constructor(private http: Http) { }

  private handleError(error: Response)
  { }

  private serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
 

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;

    this.valueApi.UserName = username;
    this.valueApi.Password = password;
    this.valueApi.EmailAddress = ' ';


    //________________
    this.errorMessage = "";
    let body = this.serializeObj(this.valueApi);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:53172/api/complaint/getcomplaint?format=json', body, options).map(res => res.text());


  }
}

class ValueApi {
  id: number;
  UserName: string;
  Password: string;
  EmailAddress: string;
}