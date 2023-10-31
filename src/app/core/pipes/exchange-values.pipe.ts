import { Pipe, PipeTransform } from '@angular/core';
import { RandomGeneratorService } from '../services/random-generator.service';

@Pipe({
  name: 'exchangeValues',
})
export class ExchangeValuesPipe implements PipeTransform {
  randomValue!: number;
  constructor(private randomGeneratorService: RandomGeneratorService) {}
  transform(value: any, col: string): string {
    return this.isBalance(col)
      ? value?.toString() +
          ' BTC | $ ' +
          Number(value) * this.randomGeneratorService.getResolvedRandomRate()
      : value;
  }

  private isBalance(col: string): boolean {
    return col === 'balance' || col === 'availableBalance';
  }
}
