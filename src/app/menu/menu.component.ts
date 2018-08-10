import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menuitem';
import { Location } from '@angular/common';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];
  activeMenuItem: MenuItem;

  
  constructor(private location: Location) { }

  ngOnInit() {
    this.createMenuItems();
  }

  private createMenuItems() : void {
    if(!this.menuItems){
      this.menuItems  = [
        {
          display: "Home",
          route: "/home"
        },
        { 
          display: "Collection",
          route: "/collection"
        },
        {
          display: "Movies",
          route: "/movies"
        }
      ];
    }
  }

  getClass(path: string): string {
    //console.log(path);
    return "active"; // this.location.pathname === path ? 'active' : '';
  }

  selectMenuItem(menuItem: MenuItem) : void {
    //console.log(this.location.pathname);
    if (menuItem) {
      this.activeMenuItem = menuItem;
    } else if(this.menuItems){
      this.activeMenuItem = this.menuItems[0];
    }
  }
}
