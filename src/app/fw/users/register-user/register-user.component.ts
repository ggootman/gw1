import { Component, AfterViewInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements AfterViewInit {

valueApi: ValueApi =  new ValueApi();

    errorMessage: string;

    constructor(private http: Http) {

      //  this.getData();     
    }

  ngAfterViewInit() {       
        setTimeout(() => {
            document.getElementById('id').focus();

        }, 100);
    }
   private serializeObj(obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

        return result.join("&");
    }
    
    submitRegister() {
        this.errorMessage = "";
        let body = this.serializeObj(this.valueApi);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({headers: headers });

        this.http.post('http://localhost:53172/api/Complaint/', body, options)
            .map(res => res.text())
            .subscribe(
            data => {
                alert(data);
            },
            err => {
                this.errorMessage = err._body;
            },

        );
    }
}

    class ValueApi {
      id: number;
      UserName: string;
      Password: string;
      EmailAddress: string;
}