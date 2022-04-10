import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Nathan John', 'You live to die, but it is what you die for that is worth living.', 0, 0),
    new Quote(2, 'Bruce Lee', 'Be like water, my friend.', 0, 0),
    new Quote(3, 'Maya Angelou', 'I am a Woman Phenomenally.Phenomenal Woman,that is me.', 0, 0),
    new Quote(4, 'Gandhi', 'You must be the change you wish to see in the world.', 0, 0),
    new Quote(5, 'Joshua J. Marine', 'Challenges are what make life interesting and overcoming them is what makes life meaningful.', 0, 0),
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
