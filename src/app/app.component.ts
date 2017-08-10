import { Component, AfterViewInit } from '@angular/core';

import { FrameworkConfigService, FrameworkConfigSettings } from 'app/fw/services/framework-config.service';
import { MenuService } from 'app/fw/services/menu.service';
import { initialMenuItems } from './app.menu';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor (private frameworkConfigService: FrameworkConfigService, private router: Router,
               private menuService: MenuService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com'},
        { imageFile: 'assets/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: false,
      showUserControls: true,
      showStatusBar: false,
      showStatusBarBreakpoint: 800,
      menuItemUpperCase: false
    };

    frameworkConfigService.configure(config);

    menuService.items = initialMenuItems;
    frameworkConfigService.displayName = 'MPCA';
  }

   ngAfterViewInit() {
        this.router.navigate(['/stations']);
    }
}
