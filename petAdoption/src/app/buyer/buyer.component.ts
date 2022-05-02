import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';


@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
  show=false;

  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
 this.getPets();
  }

  getPets(){
    this.serviceService.getpets().subscribe(data => {
      console.log(data);
    })
  }
  Show() {
  this.show = true;
  }

}
