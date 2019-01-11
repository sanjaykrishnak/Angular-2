import { Component, OnInit,  } from '@angular/core';
import { Animal } from '../model/animal';
import { AnimalService} from '../service/animal.service';

@Component({
  selector: 'app-animal-submit',
  templateUrl: './animal-submit.component.html',
  styleUrls: []
})
export class AnimalSubmitComponent implements OnInit {

     animal: Animal;
     private anmlService: AnimalService;

  constructor(anm: AnimalService) {
    this.anmlService = anm;
    this.animal = new Animal('2', 'Duck', 'Ok');
}

 ngOnInit() { }

  createAnimal() {
    console.log('AnimalSubmitComponent:createAnimal()-' + this.animal.name);
    this.anmlService.createAnimal(this.animal).subscribe(data => {
        this.animal = data;
      });

  }

}
