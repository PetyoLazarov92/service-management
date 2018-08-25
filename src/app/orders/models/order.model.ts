export class OrderModel{
    constructor(
        public priority: string,
        public assignedTo: string,
        public warranty: string,
        public type: string,
        public brand: string,
        public deviceModel: string,
        public serial: string,
        public equipment: string,
        public appearance: string,
        public description: string,
        public client: string,
        public reqServices?: string,
        public notes?: string  
    ){}
  }