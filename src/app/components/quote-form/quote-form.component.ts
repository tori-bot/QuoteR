import { Quote } from './../../quote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  showform: boolean = false;
  quotes: any;
  toggleform() {
    this.showform = !this.showform;
  }

  newQuote!: Quote;
  submittedby!: string;
  quote!: string;
  author!: string;
  date!: Date;
  
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.newQuote = new Quote(0, this.author, this.quote,this.submittedby , new Date(), 0, 0);
    this.addQuote.emit(this.newQuote)
    console.log(this.newQuote)
  }

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
