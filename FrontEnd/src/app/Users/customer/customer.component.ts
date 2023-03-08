import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Interfaces/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  
})
export class CustomerComponent implements OnInit {

  customers!:Customer[];
  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.customers=this.userService.getCustomers()
  }

}
