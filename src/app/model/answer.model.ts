export class AnswerModel{
  token:string;
  type:string;
  id:number;
  username:string;
  roles:string[];

  constructor(id: number, username: string, roles: string[]) {
    this.id = id;
    this.username = username;
    this.roles = roles;
  }
}
