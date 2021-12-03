import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../model/user.model";
import {HelloService} from "../hello.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  password:string;
  password2:string;
  @Input() user:UserModel;
  ans:string;
  done: boolean =false;
  constructor(private helloService:HelloService) { }
  ngOnInit(): void {
  }
  submit(){
    if(this.password === this.password2) {
      this.user = new UserModel(this.user.username, this.password, "USER");
    this.helloService.updatePassword(this.user).subscribe(data => this.ans = data);
    // this.ans = "Account created successfully!"
    }
    else { this.ans = "Passwords are different!"}
    this.done = true;
  }

}
