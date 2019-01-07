import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

     private baseUrl = 'http://localhost:8080/rest/animals';
    constructor(private http: HttpClient) { }
        getAnimals() {
      return this.http.get(this.baseUrl);
     }

}
