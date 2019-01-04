import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradesComponent }      from './trades/trades.component';
import { TradesAddComponent }      from './trades/trades-new.component';
import { FirstComponent }      from './first.component';
import { SecondComponent }      from './second.component';

const routes: Routes = [{path: 'trades',    component: TradesComponent},
			{path: 'trades-new', component: TradesAddComponent},
			{path: 'first', component: FirstComponent},
			{path: 'second', component: SecondComponent}
			];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
