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
  email:string;
  password:string;
  password2:string;
  user:UserModel;

  ans:string;
  done: boolean =false;
  d:boolean = false;
  constructor(private helloService:HelloService) { }

  ngOnInit(): void {
  }
  submit(){
    this.done = false;
    if(this.password === this.password2) {
      if(this.validEmail(this.email)){
      this.user = new UserModel(this.username, this.email,this.password, "USER");
      this.helloService.createUser(this.user).subscribe(data => this.ans = data);
        this.d = true;
        this.helloService.verifyReg(this.email);
      }
      else {this.ans = "Incorrect email"
        this.done = true;}
    }
    else { this.ans = "Passwords are different!"
      this.done = true;}

  }
  validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
}
