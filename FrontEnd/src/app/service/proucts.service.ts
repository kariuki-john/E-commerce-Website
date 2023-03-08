import { Injectable } from '@angular/core';
import { Product } from '../Interfaces';

@Injectable()

export class ProuctsService {
  
private products:Product[]=[{
  name:'Mangoe',
  description:'Mangoes help in food digestion and improve imuunity bossting',
  price:200,
  image:'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322096/mangoes-chopped-and-fresh.jpg'
},
{
  name:'Mangoe',
  description:'Mangoes help in food digestion and improve imuunity bossting',
  price:200,
  image:'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322096/mangoes-chopped-and-fresh.jpg'
},
{
  name:'Mangoe',
  description:'Mangoes help in food digestion and improve imuunity bossting',
  price:200,
  image:'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322096/mangoes-chopped-and-fresh.jpg'
},
{
  name:'Mangoe',
  description:'Mangoes help in food digestion and improve imuunity bossting',
  price:200,
  image:'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322096/mangoes-chopped-and-fresh.jpg'
}
]

constructor(){}

AddProduct(product:Product):void{
  this.products.push(product)
  console.log(product);
  
}
getProduct():Product[]{
  return this.products
}
 
}



