export class User {

    constructor(
        public userName:string,
        public lastName: string,
        public email: string,
        public salutation: string,
        public firstName: string,
        public addressLine1: string,
        public addressLine2: string,
        public addressLine3: string,
        public city :string,
        public pincode:number,
        public country:string,
        public state: string,
        public phone:string,
        public agreeTermsCondition:string,
        public password:string,
        public id?: number        
      ) {  }
    
}
