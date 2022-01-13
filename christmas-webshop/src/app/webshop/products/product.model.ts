export class ProductModel{
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  avalable: boolean;
  total: number;
  image: string;
  sex: string;
  size: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.price = 0;
    this.color = '';
    this.avalable = true;
    this.total = 0;
    this.image = '';
    this.sex = '';
    this.size = '';
  }
}
