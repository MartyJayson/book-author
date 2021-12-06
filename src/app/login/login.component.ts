import {Component, OnInit, Output} from '@angular/core';
import {HelloService} from "../hello.service";
import {Router} from "@angular/router";
import {AnswerModel} from "../model/answer.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ans: AnswerModel;
  id: number;
  done: boolean = false
  credentials = {username: '', password: '', role:'USER'};
  constructor(private helloService:HelloService, private router:Router) { }

  ngOnInit(): void {
  }
login(){
    this.helloService.login(this.credentials).subscribe(data => this.ans = data);
    window.sessionStorage.removeItem("auth_token");
    window.sessionStorage.removeItem("user_name");
    window.sessionStorage.removeItem("authorities_key")
    window.sessionStorage.setItem("user_name", this.ans.username);
    window.sessionStorage.setItem("auth_token", this.ans.token);
    window.sessionStorage.setItem("authorities_key", JSON.stringify(this.ans.roles));

    console.log(this.ans.token);
    this.router.navigate(["/profile/" + this.ans.id]);

    if(this.ans.id == null)
      this.done = true;
  }

}
