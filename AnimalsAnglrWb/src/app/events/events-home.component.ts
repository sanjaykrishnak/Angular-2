import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event} from '../model/event';

@Component({
  selector: 'app-event-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsHomeComponent {
    public clickedEvent: Event;
    childEventClicked(event: Event) {
             console.log('AppComponent:AppComponent()');
           this.clickedEvent = event;
  }
}
