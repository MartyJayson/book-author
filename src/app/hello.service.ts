import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {BookModel} from "./model/book.model";
import {AuthorModel} from "./model/author.model";
import {BookauthorModel} from "./model/bookauthor.model";
import {SimplepageModel} from "./model/simplepage.model";
import {UserModel} from "./model/user.model";
@Injectable({
    providedIn: 'root'
})

export class HelloService {

    constructor(private httpClient: HttpClient){

    }

    helloWorld(): Observable<any>{
        let url = "http://localhost:8080/hello";
        return this.httpClient.get(url, {responseType:'text'});
    }
    sum(a: number, b:number): Observable<any>{
        let url = "http://localhost:8080/calc";
        return this.httpClient.get(url+"?a="+a+"&b="+b);
    }
    date(date:string): Observable<any>{
      let url = "http://localhost:8080/date";
      return this.httpClient.get(url+"?date="+date, {responseType: 'text'});
    }


// ------------------- Book ------------------------------------------------------------------------
    createBook(book: BookModel | undefined): Observable<any>{
      let url = "http://localhost:8080/createbook";
      return this.httpClient.post<BookModel>(url, book);
    }
    updateBook(book: BookauthorModel | undefined, id:number|undefined): Observable<any>{
      let url = "http://localhost:8080/";
      return this.httpClient.put(url+id, book);
    }
    deleteBook(id:number|undefined): Observable<any>{
      let url = "http://localhost:8080/";
      return this.httpClient.delete(url+id);
    }
    async getBooksAwait(page:number, sort:string, dir:string){
      let url = "http://localhost:8080/book/books?size=4&page=";
      console.log(url+page);
      return this.httpClient.get<SimplepageModel<BookModel>>(url+page+"&sort="+sort+","+dir).toPromise();
    }
    getBooks(): Observable<any>{
      let url = "http://localhost:8080/test";
      return this.httpClient.get<BookModel[]>(url);
    }
 // ------------------- Author ------------------------------------------------------------------------
    createAuthor(author: AuthorModel| undefined): Observable<any>{
      let url = "http://localhost:8080/createAuthor";
      return this.httpClient.post<AuthorModel>(url, author);
    }
    updateAuthor(author:AuthorModel|undefined, id:number|undefined): Observable<any>{
      let url = "http://localhost:8080/a/";
      return this.httpClient.put(url+id, author);
    }
    deleteAuthor(id:number|undefined): Observable<any>{
      let url = "http://localhost:8080/a/";
      return this.httpClient.delete(url+id);
    }
    async getAuthorsAwait(page:number, sort:string, dir:string){
      let url = "http://localhost:8080/author/authors?size=4&page=";
      console.log(url+page);
      return this.httpClient.get<SimplepageModel<AuthorModel>>(url+page+"&sort="+sort+","+dir).toPromise();
    }
    getAuthors(){
      let url = "http://localhost:8080/testA";
      return this.httpClient.get<AuthorModel[]>(url);
    }
  // ------------------- User ------------------------------------------------------------------------
    createUser(user:UserModel|undefined): Observable<any>{
      console.log(user);
      let url = "http://localhost:8080/user/registration";
      return this.httpClient.post<UserModel>(url, user);
    }
    login(user:UserModel|undefined): Observable<any>{
      let url = "http://localhost:8080/user/login";
      return this.httpClient.post<UserModel>(url, user);
    }
}
