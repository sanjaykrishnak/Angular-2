import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

     // private baseUrl = 'http://192.168.1.169:8090/Angular2-RS/rest/animals/testJsonAnimal';
     //private baseUrl = '/Angular2-RS/rest/animals/testJsonAnimal';
     private baseUrl = '/Angular2-RS/rest/animals/listAnimals';
     private createUrl = '/Angular2-RS/rest/animals/create';
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
    public createAnimal(animal) {
    console.log('AnimalService:createAnimal()');
    //const httpHeaders = new HttpHeaders();
    //httpHeaders.append('Access-Control-Allow-Origin', '*');
    //httpHeaders.append('Access-Control-Allow-Methods', 'POST');
    //httpHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    //httpHeaders.append('Content-Type', 'application/json');
    //httpHeaders.append('Accept', 'application/json');
    // httpHeaders.set('Content-Type', 'text/plain;odata=verbose');
    // httpHeaders.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //let options = { headers: httpHeaders };
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'})};
    
    const formData: FormData = new FormData();
    formData.append('id', animal.id);
    formData.append('name', animal.name);
    formData.append('type', animal.type);
    let body: string = JSON.stringify(animal);
    console.log('AnimalService:createAnimal()- Animal sent' + body);
    // console.log('AnimalService:createAnimal()- Animal headers' + options);
    const dat$ = this.http.post<Animal>(this.createUrl, body, httpOptions);
    return dat$;
  }
 }
