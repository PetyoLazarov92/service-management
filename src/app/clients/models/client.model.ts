export class ClientModel{
    constructor(
        public name: string,
        public phone: string,
        public orders: string
        public email?: string,
        public address?: string,
    ){}
  }