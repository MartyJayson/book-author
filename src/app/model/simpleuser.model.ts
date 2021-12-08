export class SimpleUserModel {
  id?:number;
  username?:string;
  email?:string;
  password?:string;
  role:string;
  constructor(i:number, u:string, e:string, p:string, r:string) {
    this.id = i;
    this.username = u;
    this.email = e;
    this.password = p;
    this.role = r;
  }
}
