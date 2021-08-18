import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ByeComponent } from './bye/bye.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { HiComponent } from './hi/hi.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ByeComponent, GreetingsComponent, HiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
