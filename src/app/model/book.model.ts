import {AuthorModel} from "./author.model";

export class BookModel{
  id?:number;
  title?:string;
  description?:string;
  issueYear?:number;
  authorid?:number;
  constructor(t: string, d: string, i:number, a:number|undefined) {
    this.title = t;
    this.description = d;
    this.issueYear = i;
    this.authorid = a;
  }
}
