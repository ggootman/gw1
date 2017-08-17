import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
    
  //Method:
    signIn : (username: string, password: string, rememberMe: boolean) => Observable<any>;
    // signOut :
    // changePassword : 
}