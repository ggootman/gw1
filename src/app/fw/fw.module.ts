import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ScreenService } from './services/screen.service';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { TooltipModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule, RouterModule, BrowserAnimationsModule, TooltipModule.forRoot()
  ],
  declarations: [FrameworkBodyComponent, ContentComponent, TitleBarComponent, TopBarComponent, ScreenLarge, ScreenBelowLarge,
                 MenuComponent, MenuItemComponent, PopupMenuComponent],
  providers: [FrameworkConfigService, ScreenService, MenuService],
   exports: [FrameworkBodyComponent, ScreenLarge, ScreenBelowLarge ]
})
export class FwModule { }
