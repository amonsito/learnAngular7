import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listUsers:user[];
  query:string='';
  constructor(private userService:UserService) { 
    this.listUsers=userService.getUsers();
  }

  ngOnInit() {
  }

}
