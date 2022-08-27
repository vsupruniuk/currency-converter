/* eslint-disable no-unused-vars,no-undef */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private currencyService: CurrencyService) {}

  usdRate = 0;
  eurRate = 0;
  timerId = setInterval(() => {}, 0);

  ngOnInit() {
    this.currencyService
      .convertCurrency('USD', 'UAH', 1)
      .subscribe((rate) => (this.usdRate = rate.result.rate));

    this.currencyService
      .convertCurrency('EUR', 'UAH', 1)
      .subscribe((rate) => (this.eurRate = rate.result.rate));

    this.timerId = setInterval(() => {
      this.currencyService
        .convertCurrency('USD', 'UAH', 1)
        .subscribe((rate) => (this.usdRate = rate.result.rate));

      this.currencyService
        .convertCurrency('EUR', 'UAH', 1)
        .subscribe((rate) => (this.eurRate = rate.result.rate));

      // eslint-disable-next-line no-undef
      console.log('new request');
    }, 60000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}
