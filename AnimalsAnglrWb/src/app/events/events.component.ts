import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event} from '../model/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

      @Output() eventClicked = new EventEmitter<Event>();
      events: Event[] = [];
      public readonly numEvents: number = 4;


  constructor() { this.getEvents(); this.getNumEvents(); }

  ngOnInit() {
  }



  onClick(event: Event): void {
    console.log('EventsComponent:onClick()');
    this.eventClicked.emit(event);
  }

  getEvents(): Event[] {
      console.log('EventsComponent:onClick()');
    this.events.push({id: 1, location: 'Singapore'});
    this.events.push({id: 1, location: 'India'});
    this.events.push({id: 1, location: 'USA'});

    console.log('EventsComponent:onClick()' + this.events.length);

    return this.events;
  }

  getNumEvents(): number {
      console.log('EventsComponent:getNumEvents()');
      return this.events.length;
  }
}
