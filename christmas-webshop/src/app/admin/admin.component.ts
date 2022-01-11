import { Component, OnInit } from '@angular/core';
import { AdminService } from './Admin.Service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private AdminService: AdminService) { }

  ngOnInit(): void {
    this.AdminService.onAdmin = true;
  }

}
