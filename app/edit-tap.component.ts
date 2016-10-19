import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'edit-tap',
  template: `
<div *ngIf="childSelectedTap">
  <h1>Edit Tap</h1>
  <div>
    <label>Enter Tap Name:</label>
    <input [(ngModel)]="childSelectedTap.name">
  </div>
  <div>
    <label>Enter Tap Brand:</label>
    <input [(ngModel)]="childSelectedTap.brand">
  </div>
  <div>
    <label>Enter Tap Price:</label>
    <input [(ngModel)]="childSelectedTap.price">
  </div>
  <div>
    <label>Enter Tap Alcohol Percentage:</label>
    <input [(ngModel)]="childSelectedTap.alcoholPercentage">
    <button (click)="doneClicked()">Done</button>
  </div>
</div>
`
})

export class EditTapComponent {
 @Input() childSelectedTap: Tap;
 @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
