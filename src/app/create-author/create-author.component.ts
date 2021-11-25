import { Component, OnInit } from '@angular/core';
import {AuthorModel} from "../model/author.model";
import {HelloService} from "../hello.service";

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  name:string|undefined;
  birthdate:Date|undefined;
  author:AuthorModel|undefined;
  ans:string|undefined;
  done:boolean = false;
  constructor(private helloService:HelloService) { }

  ngOnInit(): void {
  }
  submit(){
    this.author = new AuthorModel(this.name, this.birthdate);
    this.helloService.createAuthor(this.author).subscribe(data => {this.done = true; this.ans = data});
  }
}
