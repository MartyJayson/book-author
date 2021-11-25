import {BookModel} from "./book.model";

export class AuthorModel{
  id?:number;
  name?:string;
  birthdate?:Date;
  // books?:BookModel[];
  constructor(n:string|undefined, date:Date|undefined) {
    this.name = n;
    this.birthdate = date;
  }
}
