import { Observable } from 'rxjs/Observable';

export abstract class RegisterUserApi {
    
  //Method:
    registrations : (username: string, password: string, emailaddress: string) => Observable<any>;
  
    // changePassword : 
}