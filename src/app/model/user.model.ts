export class UserModel{
  id?:number;
  username?:string;
  email?:string;
  password?:string;
  role?:string;
  constructor(u:string, e:string, p:string, r:string) {
    this.username = u;
    this.email = e;
    this.password = p;
    this.role = r;
  }
}
