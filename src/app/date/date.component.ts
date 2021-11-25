import { Component, OnInit } from '@angular/core';
import {HelloService} from "../hello.service";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  now:string = "";
  time:string = "";
  ans:string | undefined;
  done:boolean = false;

  date:Date = new Date();
  clock:string = this.date.getHours() + ":";

  constructor(private helloService:HelloService) {
  }

  ngOnInit(): void {
    if(this.date.getMinutes()>=10)
      this.clock += this.date.getMinutes();
    else this.clock += "0" + this.date.getMinutes();
  }
  submit(){
      return this.helloService.date(this.now + " " + this.time).subscribe((date:any) => {this.ans = date; this.done = true;});
  }
}
