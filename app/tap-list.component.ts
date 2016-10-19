import { Component } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'tap-list',
  template: `
  <div *ngFor="let currentTap of taps">
    <h3>{{ currentTap.name }}</h3>
  <button (click)="showDetails(currentTap)">Edit</button>
  </div>
  `
})

export class TapListComponent {
  public taps: Tap[] = [
    new Tap("Tiger IPA", "Stone Cold", 7.50, 8),
    new Tap("Vanessa's Hefeveisen", "VanessaPub", 9.50, 9.75),
    new Tap("Arrogant Bastard", "Stone Cold", 8.50, 11.5)
  ];
}
