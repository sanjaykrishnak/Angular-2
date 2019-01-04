import {Component} from '@angular/core'

import { DataService } from './data.service';

@Component({ 
 template: ` 
  <div> 
    <h2>Data from A: {{ data }} </h2> 
    <input [(ngModel)] = data /> 
    <br><br> 
    <a [routerLink]="['/b']">Go to B</a> 
  </div> 
  `, 
}) 
export class A {

  get data():string { 
    return this.dataService.serviceData; 
  } 
  set data(value: string) { 
    this.dataService.serviceData = value; 
  } 
  
  constructor(public dataService: DataService) { } 
}