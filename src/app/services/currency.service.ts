import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrenciesApi } from '../../types/Currencies';
import { CurrencyRate } from '../../types/CurrencyRate';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  BASE_URL = 'https://api.fastforex.io';
  API_KEY = 'ab70f5588b-c85e2345e0-rhfafn';

  getAllCurrencies() {
    const { BASE_URL, API_KEY } = this;

    return this.http.get<CurrenciesApi>(
      `${BASE_URL}/currencies?api_key=${API_KEY}`
    );
  }

  convertCurrency(fromCurrency: string, toCurrency: string, amount: number) {
    const { BASE_URL, API_KEY } = this;

    return this.http.get<CurrencyRate>(
      `${BASE_URL}/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}&api_key=${API_KEY}`
    );
  }
}
