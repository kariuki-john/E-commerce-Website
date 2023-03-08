import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProuctsService } from 'src/app/service/proucts.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
  
})
export class AddProductsComponent {
@ViewChild('name') name!:ElementRef
@ViewChild('description') description!:ElementRef
@ViewChild('image') image!:ElementRef
@ViewChild('price') price!:ElementRef

constructor(private productService:ProuctsService){}

AddProducts(){
  this.productService.AddProduct({
    name:this.name.nativeElement.value as string,
    description:this.description.nativeElement.value as string,
    image:this.image.nativeElement.value as string,
    price:this.price.nativeElement.value as number
  })
  this.productService.getProduct();
}

}

 
