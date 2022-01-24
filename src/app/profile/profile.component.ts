import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  userAccount: any = {
    user: "test",
    password: "123"
  };
  overview: boolean = true;
  performance: boolean = true;
  price: boolean = true;
  temp: any = "";
  oldPassword: boolean = false;
  newPassword: boolean = false;
  toChangePassword: boolean = true;
  tempPwd: any = "";
  newPwd: any = {
    password:""
  }
  ngOnInit(): void {
  }

  confirmPassword() {
    console.log("AM I HERE")
    console.log(this.tempPwd+" "+this.newPwd.password)
    if (this.tempPwd == this.newPwd.password) {
      //PUT password
      
      this.oldPassword = false;
      this.newPassword = false;
      this.toChangePassword = true;

      alert("Password Changed!")
    }
  }

  resetPassword() {
    this.oldPassword = true;
    this.toChangePassword = false;
  }

  checkPassword() {
    console.log(this.temp)
    console.log("Check my useraccount password",this.userAccount)
    if (this.temp == this.userAccount.password) {
      this.oldPassword = false;
      this.newPassword = true;
    } else {
      alert("Password is incorrect!")
    }
  }

  
  switchNav(e: any) {
    switch (e) {
      case 'Overview':
        this.overview = true;
        this.performance = false;
        this.price = false;
        break;
      case 'Performance':
        this.overview = false;
        this.performance = true;
        this.price = false;
        break;
      case 'Price':
        this.overview = false;
        this.performance = false;
        this.price = true;
        break;
    }
  }

}
