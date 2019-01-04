import {Injectable,EventEmitter,Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class UpdateService 
{
    // Observable string sources
    private newAnimalSource = new BehaviorSubject<string>("Buffalo");
    // Observable string streams
    newAnimal$ = this.newAnimalSource.asObservable();

	constructor() { console.log("UpdateService:constructor()"); }

    changeAnimal(animal: string) 
    {
	console.log("UpdateService:changeAnimal()"+animal);
        this.newAnimalSource.next(animal);
    }
}