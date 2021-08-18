import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GreetingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
