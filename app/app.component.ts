import { Component } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Halle's Tap Room</h1>
    <tap-list
      [childTapList]="masterTapList"
      (clickSender)="showDetails($event)"
      ></tap-list>
      <edit-tap
      [childSelectedTap]="selectedTap"
      (doneClickedSender)="finishedEditing()"
      ></edit-tap>
    </div>
  `
})

export class AppComponent {
  public masterTapList: Tap[] = [
    new Tap("Tiger IPA", "Stone Cold", 7.50, 8),
    new Tap("Vanessa's Hefeveisen", "VanessaPub", 9.50, 9.75),
    new Tap("Arrogant Bastard", "Stone Cold", 8.50, 11.5)
  ];
  selectedTap: Tap = null;
  showDetails(clickedTap: Tap) {
    this.selectedTap = clickedTap;
  }
  finishedEditing() {
    this.selectedTap = null;
  }
}
