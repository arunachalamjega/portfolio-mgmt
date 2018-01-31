export class User {

    constructor(
        public lastname: string,
        public email: string,
        public surName: string,
        public firstName: string,
        public addressline1: string,
        public addressline2: string,
        public addressline3: string,
        public city :string,
        public pincode:number,
        public country:string,
        public state: string,
        public phone:string,
        public tandcaccepted:boolean,
        public id?: number        
      ) {  }
    
}
