import {Component} from '@angular/core';
import {UpdateService} from './update.service';

@Component({
    selector: 'first',
    template: `
        <h2>First component</h2>
        <button (click)="changeOutside()">Change</button>
    `
})

export class FirstComponent {
    
    constructor(private updateService: UpdateService) {}

    changeOutside() 
    {
	console.log("FirstComponent:changeOutside()");
	// this.updateService.onMainEvent.emit('CAT');
        this.updateService.changeAnimal('Cat');
	this.updateService.newAnimal$.subscribe()
    }
}