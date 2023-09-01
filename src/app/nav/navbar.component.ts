import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      li > a.active {
        color: #f97924;
      }
      .navbar {
        margin-top: 10px;
      }
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1080px) {
        #searchForm {
          display: none;
        }
      }
    `,
  ],
})
export class NavBarComponent {}
