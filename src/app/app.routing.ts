import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { StationsComponent } from './stations/stations.component';
import { HelpsComponent } from 'app/helps/helps.component';
import { SettingsComponent } from 'app/settings/settings.component';
import { SignInComponent } from "app/fw/users/sign-in/sign-in.component";
import { RegisterUserComponent } from "app/fw/users/register-user/register-user.component";



export const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
    { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, 
  //canActivate: [AuthGuard],
  //  children: [
  //    { path: '', canActivateChild: [AuthGuard],
        children: [
            { path: 'stations', component: StationsComponent },
            { path: 'helps', component: HelpsComponent },
            { path: 'settings', component: SettingsComponent },
            { path: '', component: StationsComponent },
            { path: '**', component: StationsComponent }
              //     ] }
  ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];
