import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../interfaces/User';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId:any;
  listUsers:user[];
  selectUsers:user;
  constructor(private activaredRoute:ActivatedRoute) {
    this.friendId=this.activaredRoute.snapshot.params['uId'];
    console.log(this.friendId);

//repetido
let usuario1: user = {
  uId:1,
  nick: 'Eduardo',
  age: 24,
  email: 'ed@aoe.aoe',
  friend: true,
  
};
let usuario2: user = {
  uId:2,
  nick: 'Freddy',
  age: 28,
  email: 'fred@aoe.aoe',
  friend: true
};
let usuario3: user = {
  uId:3,
  nick: 'Yuliana',
  age: 18,
  email: 'yuli@aoe.aoe',
  friend: false
};
let usuario4: user = {
  uId:4,
  nick: 'Ricardo',
  age: 17,
  email: 'rick@aoe.aoe',
  friend: true
};
let usuario5: user = {
  uId:5,
  nick: 'Marcos',
  age: 30,
  email:'marcos@aoe.aoe',
  friend: false
};
this.listUsers=[usuario1,usuario2,usuario3,usuario4,usuario5]
//
    this.selectUsers=this.listUsers.find(record=>{
      return record.uId== this.friendId;
    });
    console.log(this.selectUsers);
   }

  ngOnInit() {
  }

}
