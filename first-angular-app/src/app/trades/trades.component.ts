import { Component, OnInit } from '@angular/core';
import {Trade} from './model/trade';
import { TradeService } from './service/trade.service'


@Component({
  selector: 'first',
     template: `
         <h2>First component</h2>
         <button (click)="changeOutside()">Change</button>
    `
})
export class TradesComponent implements OnInit {

	trad: Trade = {
	    id: 1,
	    name: 'Bank Of America',
	    isin:'BOA'
  };
  
  tradeName: string = 'MRL';
	
  constructor(private tradeService: TradeService) { 
          console.log("TradeService:initVal--"+tradeService.initVal);
       }
  
  ngOnInit() {
  }
     changeOutside() {
     console.log("TradesComponent:changeOutside")
          this.tradeService.changeTrade('BOA');
    }

}
