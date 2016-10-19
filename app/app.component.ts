import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Halle's Tap Room</h1>
    <tap-list></tap-list>
    <div *ngFor="let currentTap of taps">
    <div *ngIf="selectedTap">
      <h1>Edit Tap</h1>
      <div>
        <label>Enter Tap Name:</label>
        <input [(ngModel)]="selectedTap.name">
      </div>
      <div>
        <label>Enter Tap Brand:</label>
        <input [(ngModel)]="selectedTap.brand">
      </div>
      <div>
        <label>Enter Tap Price:</label>
        <input [(ngModel)]="selectedTap.price">
      </div>
      <div>
        <label>Enter Tap Alcohol Percentage:</label>
        <input [(ngModel)]="selectedTap.alcoholPercentage">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public taps: Tap[] = [
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

export class Tap {
  public available: boolean = true;
  constructor(public name: string, public brand: string, public price: number, public alcoholPercentage: number ) { }
}
