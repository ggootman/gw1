import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ScreenService } from 'app/fw/services/screen.service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  tipMessage = '';
  location = '';
  constructor(public menuService: MenuService, public screenService: ScreenService) { }

  ngOnInit() {
    if (this.menuService.isVertical){
        this.tipMessage = 'Set horizontal menu';
        this.location = 'right';
    }
    else {
        this.tipMessage = 'Set vertical menu';
        this.location = 'bottom';
      }
  }
}
