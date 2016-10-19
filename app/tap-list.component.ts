import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'tap-list',
  template: `
  <div *ngFor="let currentTap of childTapList">
    <h3>{{ currentTap.name }}</h3>
  <button (click)="editButtonHasBeenClicked(currentTap)">Edit</button>
  </div>
  `
})

export class TapListComponent {
  @Input() childTapList: Tap[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(tapToEdit: Tap) {
    this.clickSender.emit(tapToEdit);
  }
}
