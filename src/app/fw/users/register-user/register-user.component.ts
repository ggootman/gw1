import { Component, AfterViewInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { RegisterUserApi } from '../registration-api'
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
    selector: 'fw-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements AfterViewInit {
    formError: string;
    submitting = false;

    valueApi: ValueApi = new ValueApi();

    errorMessage: string;

    constructor(private registerApi: RegisterUserApi, private router: Router) {

    }

    ngAfterViewInit() {
        setTimeout(() => {
            document.getElementById('id').focus();

        }, 100);
    }


    submitRegister(registerForm: NgForm) {

        if (registerForm.valid) {

            console.log('submitting...', registerForm);
            this.submitting = true;
            this.formError = null;

            this.registerApi.registrations(registerForm.value.username, registerForm.value.password, registerForm.value.email)
                .subscribe((data) => {
                    console.log('got valid: ', data);
                    this.router.navigate(['/signin']);
                    alert(data);
                },
                (err) => {
                    this.submitting = false;
                    console.log('got error: ', err);
                    this.formError = 'Invalid User Name and/or Password';
                    //      this.formError = err;
                    this.router.navigate(['/?']);
                }
                );
        }

   
    }
}
class ValueApi {
    id: number;
    UserName: string;
    Password: string;
    EmailAddress: string;
}