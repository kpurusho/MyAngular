import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'charToSpace'
})
export class CharToSpacePipe implements PipeTransform{

    transform(value: string, replacechar: string) : string {
        return value.replace(replacechar, ' ');
    }

}