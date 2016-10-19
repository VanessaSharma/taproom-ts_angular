import { Component, Output, EventEmitter } from '@angular/core';
import { Tap } from './tap.model';

@Component({
  selector: 'new-tap',
  template: `
  <h1>New Tap</h1>
   <div>
     <label>Enter Tap Name:</label>
     <input #newName>
   </div>
   <div>
     <label>Enter Tap Brand:</label>
     <input #newBrand>
   </div>
   <div>
     <label>Enter Tap Price:</label>
     <input #newPrice>
   </div>
   <div>
     <label>Enter Alcohol Content:</label>
     <input #newalcoholPercentage>
     <button (click)="addClicked(newName.value, newBrand.value, newPrice.value, newalcoholPercentage.value);
     newName.value='';
     newBrand.value='';
     newPrice.value='';
     newalcoholPercentage.value='';
     ">Add</button>
   </div>
  `
})

export class NewTapComponent {
  @Output() newTapSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcoholPercentage: number) {
    var newTapToAdd: Tap = new Tap(name, brand, price, alcoholPercentage);
    this.newTapSender.emit(newTapToAdd);
  }
}
