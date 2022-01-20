import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  images: any = 
  {
    family: "../assets/family.jpeg"
    }
  text: any = {
    firstLine: `Be Financially Secure`,
    secondLine: "Buy Stocks Now"
  }

  ngOnInit(): void {
  }

}
