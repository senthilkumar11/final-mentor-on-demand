import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { Technology } from 'src/app/models/technology';

@Component({
  selector: 'app-list-technology',
  templateUrl: './list-technology.component.html',
  styleUrls: ['./list-technology.component.css']
})
export class ListTechnologyComponent implements OnInit {
  tech:String[];
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getTech().subscribe(response=> this.tech=response)
  }


}
