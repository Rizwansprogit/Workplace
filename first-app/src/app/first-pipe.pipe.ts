import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe'
})
export class FirstPipePipe implements PipeTransform {

  transform(value: any, value1:any) {

    return (value)-(value*value1/100)
    
  }

}
