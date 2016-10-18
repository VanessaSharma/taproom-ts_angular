import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Halle's Tap Room</h1>
  </div>
  `
})

export class AppComponent {
  public tap: Tap = new Tap("Our Taps");
}

export class TapRoom {
  public tap: string = "IPA";
  constructor(public tap: string) { }
}
