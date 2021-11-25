import {AuthorModel} from "./author.model";

export class BookauthorModel{
  id?:number;
  title?:string;
  description?:string;
  issueYear?:number;
  author?:AuthorModel;
  constructor(t: string | undefined, d: string | undefined, i:number | undefined, a:AuthorModel | undefined) {
    this.title = t;
    this.description = d;
    this.issueYear = i;
    this.author = a;
  }
}
