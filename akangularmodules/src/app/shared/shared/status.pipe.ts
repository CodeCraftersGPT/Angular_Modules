import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {

    switch(value){
      case 1:
        return "In Stock";
      case 0:
        return "Out of Stock";
      case 2:
        return "Delivered";
      case 3:
        return "Not Delivered";  
      default:
        return "Unknown";
    }
   
    // if(value == 1){
    //   return "In Stock";
    // }else{
    //   return "Out of Stock";
    // }
  }

}
