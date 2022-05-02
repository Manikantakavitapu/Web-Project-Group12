import { Component, Input, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {

 message:string="";
 approvalText:string="";


 constructor(private buyerService : BuyerService ) {

 }

  ngOnInit(): void {
    this.buyerService.currentApprovalStageMessage.subscribe(msg => this.message = msg);
  }

  submit() {
    this.buyerService.updateApprovalMessage(this.approvalText)
  }

}
