import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timing'
})
export class TimingPipe implements PipeTransform {

  transform(submitdate: Date): any {
    let postdate: any = submitdate;
    let currentdate:any = new Date();
    
    let diffinyrs:number = (currentdate - postdate)/31536000000 ;
    return Math.floor(diffinyrs);
    
    
    
    
// / (365 * 24 * 60 * 60)
    
  }

}
