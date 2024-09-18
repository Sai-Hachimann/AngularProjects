import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserinputComponent } from './userinput/userinput.component';
import { InvestmentReturnsComponent } from './investment-returns/investment-returns.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserinputComponent, InvestmentReturnsComponent],
})
export class AppComponent {}
