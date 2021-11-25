import { Component, OnInit } from '@angular/core';
import {BookModel} from "../model/book.model";
import {HelloService} from "../hello.service";
import {AuthorModel} from "../model/author.model";
import {ActivatedRoute} from "@angular/router";
import {SimplepageModel} from "../model/simplepage.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books?:SimplepageModel<BookModel>;
  authors:AuthorModel[];
  ans:string="";
  page:number = 0;
  sort:string="id";
  types:string[] = ["id","title"];
  i:number = 0;
  constructor(private route:ActivatedRoute,private helloService:HelloService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAuthorName(id:number){
    let b = this.books?.items.find(x => x.id === id+1);
    let a = this.authors.find(z => z.id === b?.authorid);
    console.log(a.id);
    return a?.name;
  }

  async getAllBooks(){
    this.helloService.getAuthors().subscribe(data => this.authors = data);
    this.books = await this.helloService.getBooksAwait(this.page,this.sort);
  }
  deleteBook(id:number|undefined){
    console.log(id);
    this.helloService.deleteBook(id).subscribe(data => this.ans = data);
  }
  async next(){
    if(this.books.totalPages - 2 >= this.page) {
      this.page += 1;
      this.books = null;
      this.books = await this.helloService.getBooksAwait(this.page,this.sort);
    }
  }
  async previous(){
    if(this.page > 0) {
      this.page -= 1;
      this.books = null;
      this.books = await this.helloService.getBooksAwait(this.page,this.sort);
    }
  }
  async type(){
    if(this.i>this.types.length-2)
      this.i = 0;
    else
      this.i += 1;
    this.sort = this.types[this.i];
    this.books = null;
    this.books = await this.helloService.getBooksAwait(this.page,this.sort);
  }

}
