import { Component, OnInit } from '@angular/core';
import {AuthorModel} from "../model/author.model";
import {HelloService} from "../hello.service";
import {SimplepageModel} from "../model/simplepage.model";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors?:SimplepageModel<AuthorModel>;
  ans?:string;
  page:number = 0;
  sort:string = "id";
  types:string[] = ["id","name","birthdate"];
  i:number = 0;
  constructor(private helloService:HelloService) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }
  async getAllAuthors() {
    this.authors = await this.helloService.getAuthorsAwait(this.page,this.sort);
  }
  /*date(id:number|undefined){
    this.authors?.find(x => x.id == id)?.birthdate?.toDateString();
  }*/
  delete(id:number|undefined){
    console.log(id);
    this.helloService.deleteAuthor(id).subscribe(data => this.ans = data);
  }
  async next(){
    if(this.authors.totalPages - 2 >= this.page) {
      this.page += 1;
      this.authors = null;
      this.authors = await this.helloService.getAuthorsAwait(this.page,this.sort);
    }
  }
  async previous(){
    if(this.page > 0) {
      this.page -= 1;
      this.authors = null;
      this.authors = await this.helloService.getAuthorsAwait(this.page, this.sort);
    }
  }
  dateFormatter(d:Date){
    return d.toString().substring(0,9);
  }
  async type(){
    if(this.i>this.types.length-2)
      this.i = 0;
    else
      this.i += 1;
    this.sort = this.types[this.i];
    this.authors = null;
    this.authors = await this.helloService.getAuthorsAwait(this.page,this.sort);
  }
}
