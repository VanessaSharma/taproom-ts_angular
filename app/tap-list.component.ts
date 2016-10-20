import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'tap-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="available" selected="selected">Show All Taps Avalable</option>
      <option value="low">Show Tap less than 10 pints</option>
    </select>
  <div *ngFor="let currentTap of childTapList | volume:selectedVolume">
    <h3>{{ currentTap.name }}</h3>
    <h4>{{currentTap.brand }}</h4>
    <h4 *ngIf="currentTap.price<5" class="lowPrice">$ {{ currentTap.price }}</h4>
    <h4 *ngIf="currentTap.price>5" removeClass="lowPrice" class="highPrice">$ {{ currentTap.price }}</h4>
    <h4 *ngIf="currentTap.alcoholPercentage<5" class="lowPercentage">{{ currentTap.alcoholPercentage }}%</h4>
    <h4 *ngIf="currentTap.alcoholPercentage>5" class="highPercentage">{{ currentTap.alcoholPercentage }}%</h4>
    <h5>{{ currentTap.pints }} pints left</h5>
  <button (click)="editButtonHasBeenClicked(currentTap)">Edit</button>
  <button (click)="buyPintButtonHasBeenClicked(currentTap)">Buy Pint</button>
  </div>
  `
})

export class TapListComponent {
  @Input() childTapList: Tap[];
  @Output() clickSender = new EventEmitter();
  public selectedVolume: string = "available"
  onChange(optionFromMenu) {
    this.selectedVolume = optionFromMenu;
    console.log(this.selectedVolume);
  }
  editButtonHasBeenClicked(tapToEdit: Tap) {
    this.clickSender.emit(tapToEdit);
  }
  buyPintButtonHasBeenClicked(tapToBuy: Tap) {
    tapToBuy.pints = (( tapToBuy.pints-1 ));
  }
}
