import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, MatCardModule,MatButtonModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
