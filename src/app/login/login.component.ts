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

    localStorage.setItem("auth_token", this.ans.token);
    this.router.navigate(["/profile/" + this.ans.id]);

    if(this.ans.id == null)
      this.done = true;
  }

}
