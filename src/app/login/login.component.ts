import { Component, OnInit } from '@angular/core';
import {HelloService} from "../hello.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ans: string;
  done: boolean = false
  credentials = {username: '', password: '', role:'USER'};
  error:boolean = false;

  constructor(private helloService:HelloService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.done = true;
    console.log(this.credentials.username + " " + this.credentials.username);
    this.helloService.login(this.credentials).subscribe(data => this.ans = data);
    this.router.navigateByUrl("/profile");
  }

}
