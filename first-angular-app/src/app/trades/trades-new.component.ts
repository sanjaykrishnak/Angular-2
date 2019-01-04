import { Component, OnInit,ModuleWithProviders } from '@angular/core';
import {Trade} from './model/trade';
import { TradeService } from './service/trade.service'
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';

@Component({
 selector: 'second',
     template: `
         <h2>Second component</h2>
         <div>Trade: {{tradeName}}</div>
         <button (click)="change()">Change</button>
    `
})
export class TradesAddComponent implements OnInit {

	tradeName: string = 'AAPL';
	subscription: Subscription;
	
  constructor(private tradeService: TradeService) {
  console.log("TradeService:initVal--"+tradeService.initVal);
  console.log("TradesAddComponent:constructor():1");
   this.subscription = tradeService.newTrade$.subscribe(
              tradeName=> {
                  console.log("TradesAddComponent:constructor():2"+tradeName);
                  this.tradeName = tradeName;
        });
        }
  
  ngOnInit() {
  }
  onSubmit() {
  	alert('Trade submitted');
  	this.tradeService.changeTrade('CITI');
  }
  change() {
  	console.log("TradesAddComponent:change")
          this.tradeName = 'HHH';
    }

}
