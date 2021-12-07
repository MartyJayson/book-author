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
  ans:string = " ";
  done:boolean = false;
  code: number;
  verify: number = 0;
  constructor(private helloService:HelloService, private router:Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.done = true;
    this.helloService.sendEmail(this.email).subscribe(data => this.ans = data);
  }

  async res() {
    this.ans = await this.helloService.verify(this.email, this.code);
    if(this.ans)
      this.router.navigate(["/changePassword",{username: this.email}]);
    else
      console.log("ERROR!")
  }

}
