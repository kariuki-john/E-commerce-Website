import { Injectable } from '@angular/core';
import { Customer } from '../Interfaces/user';

@Injectable()
export class UsersService {

 private customers:Customer[]=[{
    username:'John Doe',
    firstname:'John',
    secondname:'Doe',
    email:'johndoe@gmail.com',
    password:'johndoe123',
    address:'nyerii',
    phonenumber:123456789,
    country:'Kenya'
    
  },{
    username:'John Doe',
    firstname:'John',
    secondname:'Doe',
    email:'johndoe@gmail.com',
    password:'johndoe123',
    address:'nyerii',
    phonenumber:123456789,
    country:'Kenya'
    
  },{
    username:'John Doe',
    firstname:'John',
    secondname:'Doe',
    email:'johndoe@gmail.com',
    password:'johndoe123',
    address:'nyerii',
    phonenumber:123456789,
    country:'Kenya'
    
  },

]

  constructor() { }
  AddCustomer(customer:Customer):void{
    this.customers.push(customer)
    console.log(customer);
    
  }
  getCustomers():Customer[]{
    return this.customers
  }
   
}
