import { Component, OnInit } from '@angular/core';
import {UserModel} from "../model/user.model";
import {HelloService} from "../hello.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username:string;
  password:string;
  password2:string;
  user:UserModel;

  ans:string;
  done: boolean =false;
  constructor(private helloService:HelloService) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.password === this.password2) {
      this.user = new UserModel(this.username, this.password);
      this.helloService.createUser(this.user).subscribe(data => this.ans = data);
      this.ans = "Account created successfully!"
    }
    else { this.ans = "Passwords are different!"}
    this.done = true;
  }
}
