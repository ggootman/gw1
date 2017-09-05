import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FwModule } from 'app/fw/fw.module';
import { StationsComponent } from './stations/stations.component';
import { HelpsComponent } from 'app/helps/helps.component';
import { SettingsComponent } from 'app/settings/settings.component';
import { appRoutes } from './app.routing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from "app/services/user.service";
import { UserApi } from "app/fw/users/user-api";
import { RegisterUserApi } from "app/fw/users/registration-api";
import { UserRegistrationService } from "app/services/user.registration.service";
import { AuthGuard } from "app/services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    HelpsComponent,
    SettingsComponent,
    AuthenticatedUserComponent 

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,UserRegistrationService,AuthGuard,
    {provide: UserApi, useExisting: UserService },
     {provide: RegisterUserApi, useExisting:  UserRegistrationService}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
