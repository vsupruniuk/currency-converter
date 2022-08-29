export interface CurrencyRate {
  base: 'USD';
  amount: number;
  result: {
    [currency: string]: number;
    rate: number;
  };
  ms: number;
}
