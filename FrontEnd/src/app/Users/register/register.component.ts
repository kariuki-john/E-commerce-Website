import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
 
})
export class RegisterComponent {
  @ViewChild('username') username!:ElementRef
  @ViewChild('firstname') firstname!:ElementRef
  @ViewChild('secondname') secondname!:ElementRef
  @ViewChild('email') email!:ElementRef
  @ViewChild('password') password!:ElementRef
  @ViewChild('address') address!:ElementRef
  @ViewChild('country') country!:ElementRef
  @ViewChild('phonenumber') phonenumber!:ElementRef

  constructor(private userService: UsersService){}

  addCustomers(){
    this.userService.AddCustomer({
      username:this.username.nativeElement.value as string,
      firstname:this.firstname.nativeElement.value as string,
      secondname:this.secondname.nativeElement.value as string,
      email:this.email.nativeElement.value as string,
      password:this.password.nativeElement.value as string,
      address:this.address.nativeElement.value as string,
      country:this.country.nativeElement.value as string,
      phonenumber:this.phonenumber.nativeElement.value as number
    })
    this.userService.getCustomers()
  }


}
