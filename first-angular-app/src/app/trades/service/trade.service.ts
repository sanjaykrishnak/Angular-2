import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class TradeService {

    // Observable string sources
    private newTradeSource = new Subject<string>();
    // Observable string streams
    newTrade$ = this.newTradeSource.asObservable();
    initVal :number = 1;

  constructor() { console.log("TradeService:constructor()");
  this.newTradeSource.next("AAPL");
  this.initVal=+1;
  }
  
  changeTrade(trade: string) {
  	  console.log("TradeService:changeTrade"+trade);
          this.newTradeSource.next(trade);
    }
}
