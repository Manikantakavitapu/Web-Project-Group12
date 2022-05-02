import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderSuccess= false;
  fomratedAdress:string ='';

  constructor() { }

  ngOnInit(): void {
  }

  buy() {
    this.orderSuccess = !this.orderSuccess;
  }

}
