import {Component} from '@angular/core'

import { DataService } from './data.service';

@Component({ 
 template: ` 
  <div> 
    <h2>Data from B: {{ data }} </h2> 
    <input [(ngModel)] = 'data' /> 
    <br><br> 
    <a [routerLink]="['/a']">Go to A</a> 
  </div> 
  `, 
}) 
export class B { 
  get data():string { 
    return this.dataService.serviceData; 
  } 
  set data(value: string) { 
    this.dataService.serviceData = value; 
  } 
 
 constructor(public dataService: DataService) { } 
}