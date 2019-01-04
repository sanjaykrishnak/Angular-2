import {Component,Input} from '@angular/core';
import {UpdateService} from './update.service';
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';
import { Observable } from "rxjs";
import { Observer } from "rxjs";

@Component({
    selector: 'second',
    template: `
        <h2>Second component</h2>
        <div>Pet: {{animal}}</div>
        <button (click)="change()">Change</button>
    `
})
export class SecondComponent
{
    private animalName: string = 'PIG';
    subscription: Subscription;

    constructor(private updateService: UpdateService) {
        this.subscription = updateService.newAnimal$.subscribe(this.handleData, this.handleError , this.handleComplete);

	
    }
    change()
    {
	console.log("FirstComponent:change()");
        this.animalName = 'Cat';
    }
    
    
    set animal(name:string)
    {
	this.animalName = name;
    }

    get animal()
    {
	return this.animalName;
    }
    handleData(data) 
    {
	 console.log('Here are the usable data', data);
	 this.animalName=data;
	 console.log('SecondComponent:handleData()'+this.animalName);
	 this.animal=data;
	 // Insert Business logic here
    }

   handleComplete() 
   {
	 console.log('SecondComponent:handleComplete()'+this.animal);
   }

  handleError(error) 
  {
	console.log('SecondComponent:handleError()'+this.animal+"--error--"+error);
	return Observable.throw(error);
  }

   getData()
  {
  	return this.animalName
  	
  }
}