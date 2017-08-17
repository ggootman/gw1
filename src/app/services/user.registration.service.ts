import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { RegisterUserApi } from "app/fw/users/registration-api";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Injectable()
export class UserRegistrationService implements RegisterUserApi  {

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
 

  registrations(username: string, password: string,  emailaddress: string): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + emailaddress);
   // this.isAuthenticated = true;

    this.valueApi.UserName = username;
    this.valueApi.Password = password;
    this.valueApi.EmailAddress = emailaddress;


    //________________
    this.errorMessage = "";
    let body = this.serializeObj(this.valueApi);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:53172/api/Complaint/', body, options)
                    .map(res => res.text());
     

  }
}

class ValueApi {
  id: number;
  UserName: string;
  Password: string;
  EmailAddress: string;
}