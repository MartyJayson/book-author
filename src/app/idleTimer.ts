import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AppComponent} from "./app.component";

export class IdleTimer implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router, private app:AppComponent)
  {
  }
  idleTime = 0;
  ngOnInit(): void {
    var idleInterval = setTimeout(() => this.timerIncrement(), 60000);
    window.addEventListener("mousemove",()=> this.idleTime = 0);
    window.addEventListener("keypress",()=> this.idleTime = 0);
    window.addEventListener("scroll",()=> this.idleTime = 0);
  }
  timerIncrement(){
    this.idleTime+=1;
    if(this.idleTime>29){
      this.app.logout();
    }
  }
  timeout(){

  }

}
