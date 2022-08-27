import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from './services/currency.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
