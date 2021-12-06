import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstackfront';
  constructor(private router: Router) {
  }
  logout(){
    this.router.navigate(["/"]);
    sessionStorage.clear();
  }
  public get logIn(): boolean {
    return (sessionStorage.getItem('auth_token') !== null);
  }
}
