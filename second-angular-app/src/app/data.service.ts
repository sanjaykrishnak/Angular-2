import { Injectable,HostListener } from '@angular/core';

@Injectable() 
export class DataService {
  serviceData: string; 

    @HostListener('window:storage', ['$event'])
    onStorageChange(ev: StorageEvent) {
       console.log('1'+ev.key);
       console.log('2'+ev.newValue);        
    }
}