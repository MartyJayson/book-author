export class UserModel{
  id?:number;
  username?:string;
  password?:string;
  role?:string;
  constructor(u:string, p:string, r:string) {
    this.username = u;
    this.password = p;
    this.role = r;
  }
}
