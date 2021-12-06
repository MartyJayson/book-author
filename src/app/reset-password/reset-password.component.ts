import { Component, OnInit } from '@angular/core';
import {HelloService} from "../hello.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string;
  ans:string;
  done:boolean = false;
  code: string;
  verify: number = 0;
  constructor(private helloService:HelloService, private router:Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.done = true;

    this.helloService.verify(this.email).subscribe(data => this.ans = data);
    console.log(this.ans);
  }

  res() {
    if(this.ans == this.code)
      this.router.navigate(["/change-password"]);
    else
      console.log("ERROR!")
  }

}
