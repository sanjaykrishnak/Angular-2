import { Component, OnInit, Input} from '@angular/core';
import { Event} from '../model/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

    @Input() event: Event;

  constructor() {this.getEvent(); }

  ngOnInit() {
  }

  getEvent(): Event {
      console.log('EventdetailsComponent:getEvent()');
      return this.event;
  }

}
