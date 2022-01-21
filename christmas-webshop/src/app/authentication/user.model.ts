export class UserModel{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    country: string;
    city: string;
    street: string;
    number: number;
    extra: string;    

    constructor(
    ){
      this.id = '';
      this.firstName = '';
      this.lastName = '';
      this.password = '';
      this.email = '';
      this. city = '';
      this.country = '';
      this. street = '';
      this.number = 0;
      this.extra = '';       
    }
}