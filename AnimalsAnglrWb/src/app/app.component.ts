import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animals List';
  public clickedEvent: Event;

  childEventClicked(event: Event) {
      console.log('AppComponent:AppComponent()');
    this.clickedEvent = event;
  }
}
