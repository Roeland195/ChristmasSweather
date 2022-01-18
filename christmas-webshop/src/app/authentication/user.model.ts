export class UserModel{
    id: string;
    name: string;
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
      this.name = '';
      this.password = '';
      this.email = '';
      this. city = '';
      this.country = '';
      this. street = '';
      this.number = 0;
      this.extra = '';       
    }
}