export class UserModel{
    constructor(
        public username: string,
        public password: string,
        public firstName: Array<string>,
        public lastName: string,
        public email: string,
    ){}
  }