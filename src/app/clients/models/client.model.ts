export class ClientModel{
    constructor(
        public name: string,
        public phone: string,
        public orders: Array<string>,
        public email?: string,
        public address?: string,
    ){}
  }