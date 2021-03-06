import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalService } from 'src/app/popup/modal.service';
import { ProductModel } from 'src/app/webshop/products/product.model';
import { productService } from 'src/app/webshop/products/product.service';
import { AdminService } from '../Admin.Service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productStatus: string = 'verwijderd';
  productImage: string = 'https://cdn.pixabay.com/photo/2012/04/02/13/51/cardboard-box-24547_1280.png';
  editProduct: ProductModel = new ProductModel;

  productForm!: FormGroup;

  editMode = false;
  productId: string = '';
  productChange = false;


  constructor(
    private router: Router,
    private ProductService: productService,
    private route: ActivatedRoute,
    private adminService: AdminService,
    public modalService: ModalService) { }

  ngOnInit(): void {
    this.editMode = false;

    this.route.params
    .subscribe(
      (params: Params) =>{
        this.productId = params['id'];
        this.editMode = params['id'] !=null;
        this.initForm();
      }
    );
  }

  addNew(){
    this.router.navigate(["/admin/new"]);
  }

  private initForm(){
    let productName = '';
    let productDescription ='';
    let ProductImagePath = '';
    let productPrice = 0;
    let productColor = '';
    let productSex = '';
    let productSize = '';

    if(this.editMode){
      this.ProductService.allProducts.forEach((product)=>{
        if(product.id === this.productId){
          this.editProduct = product;
          productName = this.editProduct.name;
          productDescription = this.editProduct.description;
          ProductImagePath = this.editProduct.image;
          productPrice = this.editProduct.price;
          productColor = this.editProduct.color;
          productSex = this.editProduct.sex;
          productSize = this.editProduct.size;
          if(this.editProduct.image !== null){
            this.productImage = this.editProduct.image
          }else{this.productImage = 'https://cdn.pixabay.com/photo/2012/04/02/13/51/cardboard-box-24547_1280.png';}

        }
      });
    }

    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'description': new FormControl(productDescription, Validators.required),
      'image': new FormControl(ProductImagePath, Validators.required),
      'price': new FormControl(productPrice, Validators.required),
      'color': new FormControl(productColor, Validators.required),
      'sex': new FormControl(productSex, Validators.required),
      'size': new FormControl(productSize, Validators.required),
    });
  }



   onSubmit(){
    if(this.editMode){
      this.editProduct.name = this.productForm.value.name;
      this.editProduct.description = this.productForm.value.description;
      this.editProduct.image =this.productForm.value.image;
      this.editProduct.price = this.productForm.value.price;
      this.editProduct.color = this.productForm.value.color;
      this.editProduct.sex = this.productForm.value.sex;
      this.editProduct.size = this.productForm.value.size;
      console.log(this.editProduct);
      

      this.adminService.updateProduct(this.editProduct,() =>{
        this.openProductPopup('aangepast');
      }, () =>{});
    }else{
    this.adminService.addProduct(this.productForm.value,() =>{
      this.getProductData();
      this.openProductPopup('toegevoegd');
    }, () =>{});
    }
  }

  onDelete(){
    this.adminService.deleteProduct(this.editProduct,() =>{
      this.getProductData();
      this.openProductPopup('verwijderd');
    }, () =>{});
    this.router.navigate(["/admin/new"]);
  }

  openProductPopup(status: string){
    this.productStatus = status;
    this.modalService.open('modal-1');
  }

  getProductData(){
    this.ProductService.getAllProducts('',(data: ProductModel[])=>{
      this.ProductService.allProducts = data;
      this.ProductService.products = data;
      this.productChange != this.productChange;
      this.ProductService.changedData(this.productChange);
      console.log("CHAGNED");
      
    }, () =>{});
  }
}
