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
  
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.newQuote = new Quote(0, this.submittedby, this.quote, this.author, 0, 0);
    this.addQuote.emit(this.newQuote)
    console.log(this.newQuote)
  }

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
