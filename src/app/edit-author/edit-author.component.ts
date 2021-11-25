import { Component, OnInit } from '@angular/core';
import {HelloService} from "../hello.service";
import {AuthorModel} from "../model/author.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  id?:number;
  private sub:any;

  name:string|undefined;
  birthdate:Date|undefined;
  authors?:AuthorModel[];
  author?:AuthorModel;
  done:boolean = false;
  ans:string = "";
  constructor(private router:ActivatedRoute, private helloService:HelloService) {
    this.sub = this.router.params.subscribe(params => this.id = +params['id']);
  }

  ngOnInit(): void {
    this.getAllAuthors();
  }
  getAllAuthors(){
    this.helloService.getAuthors().subscribe(data => this.authors = data as AuthorModel[]);
  }
  getAuthorsName(){
    this.author = this.authors?.find(x => x.id == this.id);
    return this.author?.name;
  }
  getAuthorsBirthdate(){
    return this.author?.birthdate;
  }
  submit(){
    this.author = new AuthorModel(this.name, this.birthdate);
    this.done = true;
    this.helloService.updateAuthor(this.author,this.id).subscribe(data => this.ans = data);
  }
}
