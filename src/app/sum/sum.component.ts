import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloService} from "../hello.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {
  done:boolean = false;
  ans:number= 0;
  num:number = 0;
  num2:number = 0;
  constructor(private httpClient: HttpClient, private helloService: HelloService, private router: Router)
  {
  }

  ngOnInit(): void {
  }
  submit(){
    this.helloService.sum(this.num,this.num2).subscribe(data => {this.ans = data, this.done = true});}

}
