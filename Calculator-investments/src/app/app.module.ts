import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserinputComponent } from './userinput/userinput.component';
import { InvestmentReturnsComponent } from './investment-returns/investment-returns.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserinputComponent,
    InvestmentReturnsComponent,
  ],
  imports: [FormsModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
