import { Routes } from '@angular/router';

import { StationsComponent } from './stations/stations.component';
import { HelpsComponent } from 'app/helps/helps.component';
import { SettingsComponent } from 'app/settings/settings.component';



export const appRoutes: Routes = [  
  { path: '', redirectTo: 'settings', pathMatch: 'full' },
  { path: 'stations', component: StationsComponent },
  { path: 'helps', component: HelpsComponent },
  { path: 'settings', component: SettingsComponent },
  //  { path: '', component: StationsComponent },
  //  { path: '**', component: StationsComponent },  
    {path: '', redirectTo: 'settings', pathMatch: 'full'},
];