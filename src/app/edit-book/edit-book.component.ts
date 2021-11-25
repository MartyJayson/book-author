import { Component, OnInit } from '@angular/core';
import {AuthorModel} from "../model/author.model";
import {BookModel} from "../model/book.model";
import {BookauthorModel} from "../model/bookauthor.model";
import {HelloService} from "../hello.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id?:number;
  private sub:any;

  authors?:AuthorModel[];
  books?:BookModel[];
  book?:BookModel;
  bookAuthor?:BookauthorModel;
  author?:AuthorModel;
  title:string|undefined;
  description:string|undefined;
  issueYear:number|undefined;
  authorid:number|undefined;

  done:boolean = false;
  ans:string = "";
  constructor(private router:ActivatedRoute, private helloService:HelloService) { }
  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => this.id = +params['id']);
    this.getAllBooks();
    this.title = this.thatBookTitle();
    this.description = this.thatBookDescription();
    this.issueYear = this.thatBookYear();
    this.authorid = this.thatBookAuthor();
  }
  getAllBooks(){
    this.helloService.getAuthors().subscribe(data => {this.authors = data as AuthorModel[]})
    this.helloService.getBooks().subscribe(data => {this.books = data as BookModel[]});
  }
  submit(){
    this.done = true;
    this.author = this.authors?.find(x => x.id == this.authorid);
    // console.log(this.author?.name);
    this.bookAuthor = new BookauthorModel(this.title, this.description, this.issueYear, this.author);
    // console.log(this.id + " " +this.title + " " + this.description + " " + this.issueYear + " " + this.authorid);
    // console.log(this.bookAuthor);
    this.helloService.updateBook(this.bookAuthor, this.id).subscribe(data => this.ans = data);
  }
  thatBookTitle(){
    this.bookAuthor =this.books?.find(x => x.id === this.id);
    return this.bookAuthor?.title;
  }
  thatBookDescription(){
    return this.bookAuthor?.description;
  }
  thatBookYear(){
    return this.bookAuthor?.issueYear;
  }
  thatBookAuthor(){
    return this.book?.authorid;
  }
}
