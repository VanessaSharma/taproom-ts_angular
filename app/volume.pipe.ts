import {Pipe, PipeTransform} from '@angular/core';
import {Tap} from './tap.model';

@Pipe({
  name: "volume",
  pure: false
})
export class VolumePipe implements PipeTransform {
  transform(input: Tap[], desiredVolume){
    var output: Tap[] = [];
    if(desiredVolume === "available") {
      for (var i = 0; i < input.length; i++) {
        if (input[i]).pints > 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredVolume === "low")
    for (var i = 0; i < input.length; i++) {
      if (input[i].pints  < 10) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
