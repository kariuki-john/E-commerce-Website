import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces';
import { ProuctsService } from 'src/app/service/proucts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  
})
export class ProductsComponent implements OnInit{
  products!:Product[];
  
  constructor(private prouctsService: ProuctsService){

  } 
  
  ngOnInit(): void {
    this.products=this.prouctsService.getProduct()
  }

}
