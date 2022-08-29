/* eslint-disable no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  constructor(public currencyService: CurrencyService) {}

  currencyList: string[] = [];
  currencyRate = 0;
  fromCurrencyValue = 100;
  fromCurrencyName = 'USD';
  toCurrencyValue = 0;
  toCurrencyName = 'UAH';

  changeFromCurrencyValue(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.fromCurrencyValue = Number(value);
    this.toCurrencyValue = Number(value) * this.currencyRate;
  }

  changeFromCurrencyName(event: Event) {
    const { value } = event.target as HTMLSelectElement;

    this.fromCurrencyName = value;

    this.currencyService
      .convertCurrency(value, this.toCurrencyName, 1)
      .subscribe((currencies) => {
        this.currencyRate = currencies.result.rate;
        this.toCurrencyValue = this.fromCurrencyValue * currencies.result.rate;
      });
  }

  changeToCurrencyValue(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.toCurrencyValue = Number(value);
    this.fromCurrencyValue = Number(value) / this.currencyRate;
  }

  changeToCurrencyName(event: Event) {
    const { value } = event.target as HTMLSelectElement;

    this.toCurrencyName = value;

    this.currencyService
      .convertCurrency(this.fromCurrencyName, value, 1)
      .subscribe((currencies) => {
        this.currencyRate = currencies.result.rate;
        this.fromCurrencyValue = this.toCurrencyValue * currencies.result.rate;
      });
  }

  ngOnInit() {
    this.currencyService.getAllCurrencies().subscribe((currencies) => {
      for (const currency in currencies.currencies) {
        this.currencyList.push(currency);
      }
    });

    this.currencyService
      .convertCurrency(this.fromCurrencyName, this.toCurrencyName, 1)
      .subscribe((currencies) => {
        this.currencyRate = currencies.result.rate;
        this.toCurrencyValue = this.fromCurrencyValue * currencies.result.rate;
      });
  }
}
