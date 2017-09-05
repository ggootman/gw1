import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import { UserApi } from '../user-api'
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formError: string;
  submitting = false;
  
valueApi: ValueApi =  new ValueApi();

    
        errorMessage: string = ""; 

    constructor(private userApi: UserApi,private router:Router ) {

      //  this.getData();     
    }

    
   
  ngOnInit() {
  }
   
   private handleError(error: Response)
    { }  
    
        private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    } 

    onSubmit(signInForm: NgForm) {
    
    if (signInForm.valid) {

      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data) => {
            console.log('got valid: ', data);
            
             this.router.navigate(['/authenticated']);
          },
          (err)=> {
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
  