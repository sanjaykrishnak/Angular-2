import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

     // private baseUrl = 'http://192.168.1.169:8090/Angular2-RS/rest/animals/testJsonAnimal';
     private baseUrl = '/Angular2-RS/rest/animals/testJsonAnimal';
     constructor(private http: HttpClient) { }

         getAnimals(): Observable<Animal> {
         console.log('AnimalService:getAnimals()');
            const headers = new HttpHeaders();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/json');
            headers.append('Secure', 'false');
            const animal$ = this.http.get<Animal>(this.baseUrl, {headers});

            return animal$;
     }
 }
