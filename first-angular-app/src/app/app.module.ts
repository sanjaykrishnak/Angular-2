import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstComponent }      from './first.component';
import { SecondComponent }      from './second.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradesComponent } from './trades/trades.component';
import { TradesAddComponent } from './trades/trades-new.component';

import { TradeService } from './trades/service/trade.service'
import { UpdateService } from './update.service'



@NgModule({
  declarations: [
    AppComponent,
    TradesComponent,
    TradesAddComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TradeService,UpdateService],
  bootstrap: [AppComponent,]
})
export class AppModule { 

}
