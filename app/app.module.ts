import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TapListComponent } from './tap-list.component';
import { EditTapComponent } from './edit-tap.component';
import { NewTapComponent } from './new-tap.component';
import { VolumePipe } from './volume.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TapListComponent,
    EditTapComponent,
    NewTapComponent,
    VolumePipe,
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
