import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'cb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  currentRoute: string;
  showMenu: boolean;
  menuItems = [
    { id: 'home', display: 'Home', path: '/' },
    { id: 'about', display: 'About', path: '/about' },
    { id: 'skills', display: 'Skills', path: '/skills' },
    { id: 'resources', display: 'Resources', path: '/resources' },
    { id: 'blog', display: 'Blog', path: '/blog' },
  ];

  constructor(private router: Router) {
    this.currentRoute = '';
    this.showMenu = false;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => {
          return event instanceof NavigationEnd;
        })
      )
      .subscribe(
        x => { 
          this.currentRoute = (x as NavigationEnd).url.replace(/\\|\//g, '');
        }
      );
  }

  onToggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
