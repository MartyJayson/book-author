import {HttpClient, HttpHeaders} from "@angular/common/http";
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

    headers = new HttpHeaders().set("Authorization", "Bearer " + sessionStorage.getItem('auth_token'));
    constructor(private httpClient: HttpClient){

    }

    helloWorld(): Observable<any>{
        let url = "http://localhost:8080/hello";
        return this.httpClient.get(url, {responseType:'text', headers:this.headers});
    }
    sum(a: number, b:number): Observable<any>{
        let url = "http://localhost:8080/calc";
        return this.httpClient.get(url+"?a="+a+"&b="+b, {headers:this.headers});
    }
    date(date:string): Observable<any>{
      let url = "http://localhost:8080/date";
      return this.httpClient.get(url+"?date="+date, {responseType: 'text', headers:this.headers});
    }


// ------------------- Book ------------------------------------------------------------------------
    createBook(book: BookModel | undefined): Observable<any>{
      let url = "http://localhost:8080/createbook";
      return this.httpClient.post<BookModel>(url, book, {headers: this.headers});
    }
    updateBook(book: BookauthorModel | undefined, id:number|undefined): Observable<any>{
      let url = "http://localhost:8080/";
      return this.httpClient.put(url+id, book, {headers:this.headers});
    }
    deleteBook(id:number|undefined): Observable<any>{
      let url = "http://localhost:8080/";
      return this.httpClient.delete(url+id, {headers: this.headers});
    }
    async getBooksAwait(page:number, sort:string, dir:string){
      let url = "http://localhost:8080/book/books?size=4&page=";
      return this.httpClient.get<SimplepageModel<BookModel>>(url+page+"&sort="+sort+","+dir, {headers: this.headers}).toPromise();
      console.log(sessionStorage.getItem('auth_token'));
    }
    getBooks(): Observable<any>{
      let url = "http://localhost:8080/test";
      return this.httpClient.get<BookModel[]>(url,{headers: this.headers});

    }
 // ------------------- Author ------------------------------------------------------------------------
    createAuthor(author: AuthorModel| undefined): Observable<any>{
      let url = "http://localhost:8080/createAuthor";
      return this.httpClient.post<AuthorModel>(url, author, {headers: this.headers});
    }
    updateAuthor(author:AuthorModel|undefined, id:number|undefined): Observable<any>{
      let url = "http://localhost:8080/a/";
      return this.httpClient.put(url+id, author,{headers:this.headers});
    }
    deleteAuthor(id:number|undefined): Observable<any>{
      let url = "http://localhost:8080/a/";
      return this.httpClient.delete(url+id, {headers:this.headers});
    }
    async getAuthorsAwait(page:number, sort:string, dir:string){
      let url = "http://localhost:8080/author/authors?size=4&page=";
      console.log(url+page);
      return this.httpClient.get<SimplepageModel<AuthorModel>>(url+page+"&sort="+sort+","+dir, {headers: this.headers}).toPromise();
    }
    getAuthors(){
      let url = "http://localhost:8080/testA";
      return this.httpClient.get<AuthorModel[]>(url, {headers: this.headers});
    }
  // ------------------- User ------------------------------------------------------------------------
    createUser(user:UserModel|undefined): Observable<any>{
      console.log(user);
      let url = "http://localhost:8080/api/auth/signup";
      return this.httpClient.post<UserModel>(url, user,{headers:this.headers});
    }
    login(user:UserModel|undefined): Observable<any>{
      let url = "http://localhost:8080/api/auth/signin";
      return this.httpClient.post<UserModel>(url, user,{headers:this.headers});
    }
    getUser(id:number):Observable<any>{
      let url = "http://localhost:8080/api/auth/" + id;
      return this.httpClient.get<UserModel>(url,{headers: this.headers});
    }
    updatePassword(user:UserModel): Observable<any>{
      let url = "http://localhost:8080/api/auth/changePassword";
      return this.httpClient.post<UserModel>(url, user, {headers:this.headers});
    }
  // ------------------- Mail ------------------------------------------------------------------------
    verify(mail:String): Observable<any>{
      let url = "http://localhost:8080/api/mail/sendEmail?mail=";
      return this.httpClient.get(url+mail, {headers:this.headers});    }
    verifyReg(mail:String){
      let url = "http://localhost:8080/api/mail/welcome?mail=";
      return this.httpClient.get(url+mail,{headers:this.headers});
    }

}
