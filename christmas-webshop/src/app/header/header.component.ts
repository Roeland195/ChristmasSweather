import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpSercive } from '../http.service';
import { authenticationService } from '../webshop/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: authenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}
