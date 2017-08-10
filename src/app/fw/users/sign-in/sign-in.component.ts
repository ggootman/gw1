import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

valueApi: ValueApi =  new ValueApi();

    
        errorMessage: string = ""; 

    constructor(private http: Http) {

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
    
    getData() {
        this.errorMessage = "";
        let body = this.serializeObj(this.valueApi);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({headers: headers });

        
          this.http.post('http://localhost:53172/api/complaint/getcomplaint?format=json', body, options)

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
  