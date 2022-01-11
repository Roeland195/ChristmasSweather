import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { authenticationService } from '../authentication/authentication.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  onAdmin = false;

  constructor(private auth: authenticationService, private route: Router) { }

  ngOnInit(): void {
    this.route.events
    .pipe(filter(event => event instanceof NavigationEnd))
    // @ts-ignore
    .subscribe((event: NavigationEnd) => {
      if (event.url.includes('/admin')) {
        this.onAdmin = true;
      }else {
        this.onAdmin = false;
      }
    });
  }

  logout(){
    this.auth.logout();
  }

}
