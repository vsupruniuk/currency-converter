import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {
  transform(value: number): number {
    return Number(value.toFixed(2));
  }
}
