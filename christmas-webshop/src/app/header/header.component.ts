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
  role: string = "";

  constructor(private auth: authenticationService, private router: Router) { }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    // @ts-ignore
    .subscribe((event: NavigationEnd) => {
      if (event.url.includes('/admin')) {
        this.controlToken();
        this.onAdmin = true;
      }else {
        this.onAdmin = false;
      }
    });
    this.auth.role.subscribe((data)=>{
      this.role = data;
    });
  }

  controlToken(): void{
    this.auth.controlToken(() =>{});
  }

  logout(){
    this.auth.logout();
    this.router.navigate(["/"]);
  }

}
