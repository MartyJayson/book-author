import { Component, OnInit } from '@angular/core';
import {AuthorModel} from "../model/author.model";
import {HelloService} from "../hello.service";
import {BookModel} from "../model/book.model";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  authors?:AuthorModel[];
  book?:BookModel;
  author?:AuthorModel;
  title:string = "";
  description:string = "";
  issueYear:number = 0;
  authorid:number = 0;

  ans:string = "";
  constructor(private helloService:HelloService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.helloService.getAuthors().subscribe(data => {
      this.authors = data as AuthorModel[]
    })
  }
  submit(){
    this.book = new BookModel(this.title, this.description, this.issueYear, this.authorid);
    console.log(this.book);
    this.helloService.createBook(this.book).subscribe(data => this.ans = data);
  }
  }
