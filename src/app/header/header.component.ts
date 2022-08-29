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

  getCurrencyRate() {
    this.currencyService
      .convertCurrency('USD', 'UAH', 1)
      .subscribe((rate) => (this.usdRate = rate.result.rate));

    this.currencyService
      .convertCurrency('EUR', 'UAH', 1)
      .subscribe((rate) => (this.eurRate = rate.result.rate));
  }

  ngOnInit() {
    this.getCurrencyRate();

    this.timerId = setInterval(() => {
      this.getCurrencyRate();
    }, 60000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }
}
