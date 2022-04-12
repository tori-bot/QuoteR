export class Quote {
    id: number;
    author: string;
    quote: string;
    submittedby: string;
    upvote: number;
    downvote: number;
    showform: boolean;

constructor(id:number, author:string, quote:string, submittedby:string, upvote:number, downvote:number){
    this.id=id;
    this.author = author;
    this.quote = quote;
    this.submittedby= submittedby;
    this.upvote = upvote;
    this.downvote = downvote;
    this.showform = false;
    }
                        
}
