import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../interfaces/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId:any;
  selectUsers:user;
  price: number=12312312;
  toDay:any=Date.now();
  constructor(private activaredRoute:ActivatedRoute,private userService:UserService) {
    this.friendId=this.activaredRoute.snapshot.params['uId'];
    
    this.selectUsers=this.userService.getUsers().find(record=>{
      return record.uId== this.friendId;
    });
    console.log(this.selectUsers);
   }

  ngOnInit() {
  }

}
