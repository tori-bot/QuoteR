import { Quote } from './../../quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Nathan John', 'You live to die, but it is what you die for that is worth living.','Nathan John',new Date(2019,3,15), 3, 0),
    new Quote(2, 'Bruce Lee', 'Be like water, my friend.','Mr Net', new Date(2016,5,27), 2, 0),
    new Quote(3, 'Maya Angelou', 'I am a Woman Phenomenally.Phenomenal Woman,that is me.','Tori', new Date(2000,3,12), 0, 0),
    new Quote(4, 'Gandhi', 'You must be the change you wish to see in the world.','Mr Net', new Date(2007,12,5), 0, 0),
    new Quote(5, 'Joshua J. Marine', 'Challenges are what make life interesting and overcoming them is what makes life meaningful.','Mr Net', new Date(1996,6,17), 0, 0),
    
  ];

  maxPerformanceIndex = Math.max(...this.quotes.map((quote) => quote.upvote - quote.downvote));

  

  showDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(notWanted: any, index: number) {
    if (notWanted) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  array: number[] = this.quotes.map(quote => quote.upvote);
  highest = Math.max(...this.array);

  addNewQuote(quote:any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.upvote = 0;
    quote.downvote = 0;
    quote.submitdate=new Date(quote.submitdate)
    this.quotes.push(quote)

    //reverse the array
    this.quotes.reverse();
  }



 


  constructor() { }

  ngOnInit(): void {
  }

  upvoteQuote(quote: Quote) {
    quote.upvote += 1;

    this.maxPerformanceIndex = Math.max(...this.quotes.map((quote) => quote.upvote - quote.downvote));
    this.highest = Math.max(...this.quotes.map((quote) => quote.upvote));
  }

  downvoteQuote(quote: Quote) {
    quote.upvote += 1;

    this.maxPerformanceIndex = Math.max(...this.quotes.map((quote) => quote.upvote - quote.downvote));
    this.highest = Math.max(...this.quotes.map((quote) => quote.upvote));
  }





}
