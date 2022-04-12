import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.component.html',
  styleUrls: ['./quotedetails.component.css']
})
export class QuotedetailsComponent implements OnInit {
  @Input()
  quote!: Quote;

  // @Output() showDetails = new EventEmitter<boolean>();
 
  
  @Output() notWanted = new EventEmitter<boolean>();

  quoteDelete(deleteMe: boolean){
  this.notWanted.emit(deleteMe);
  }

  
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
