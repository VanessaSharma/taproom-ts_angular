import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'tap-list',
  template: `
  <div *ngFor="let currentTap of childTapList">
    <h3>{{ currentTap.name }}</h3>
    <h4>{{currentTap.brand }}</h4>
    <h4>$ {{ currentTap.price }}</h4>
    <h4>{{ currentTap.alcoholPercentage }}%</h4>
    <h5>{{ currentTap.pints }} pints left</h5>
  <button (click)="editButtonHasBeenClicked(currentTap)">Edit</button>
  <button (click)="buyPintButtonHasBeenClicked(currentTap)">Buy Pint</button>
  </div>
  `
})

export class TapListComponent {
  @Input() childTapList: Tap[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(tapToEdit: Tap) {
    this.clickSender.emit(tapToEdit);
  }
  buyPintButtonHasBeenClicked(tapToBuy: Tap) {
    tapToBuy.pints = (( tapToBuy.pints-1 ));
  }
}
