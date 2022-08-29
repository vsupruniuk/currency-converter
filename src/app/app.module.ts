import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from './services/currency.service';
import { ConverterComponent } from './converter/converter.component';
import { CurrencyPipePipe } from './pipes/currency-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterComponent,
    CurrencyPipePipe
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
