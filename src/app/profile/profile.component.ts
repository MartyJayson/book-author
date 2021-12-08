import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HelloService} from "../hello.service";
import {AnswerModel} from "../model/answer.model";
import {UserModel} from "../model/user.model";
import {SimpleUserModel} from "../model/simpleuser.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id?:number;
  private sub:any;
  user:UserModel;
  u:SimpleUserModel;
  token:any;
  updated:boolean = false;
  hidden:boolean = false;
  name: string = sessionStorage.getItem("user_name");
  roles = sessionStorage.getItem("authorities_key");
  constructor(private router:ActivatedRoute, private helloService:HelloService, private router1:Router) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => this.id = +params['id']);
    this.u = new SimpleUserModel(this.id,this.name,"email","password",this.roles);
    this.helloService.getUser(this.u).subscribe(data => this.user = data);
    if(!this.updated){
      this.updated = true;
    }
  }
  open() {
    this.hidden = !this.hidden;
  }

  sum() {
    this.router1.navigate(["/sum"]);
  }

  date() {
    this.router1.navigate(["/date"]);

  }

  books() {
    this.router1.navigate(["/book"]);

  }

  authors() {
    this.router1.navigate(["/author"]);

  }
}
