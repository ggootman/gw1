import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FwModule } from 'app/fw/fw.module';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';
import { HelpsComponent } from 'app/helps/helps.component';
 import { SettingsComponent } from 'app/settings/settings.component';
import { appRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    HelpsComponent,
    SettingsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
