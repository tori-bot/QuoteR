export class Quote {
    showform: boolean;
    showDetails: boolean;
    deleteMe: boolean;
    
    constructor(public id: number, public author: string, public quote: string, public submittedby: string, public submitdate: Date, public upvote:number, public downvote:number){
    
        this.showform = false;
        this.showDetails = false;
        this.deleteMe = false;
        
    }
                        
}
