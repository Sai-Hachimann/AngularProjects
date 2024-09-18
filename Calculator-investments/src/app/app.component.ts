import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserinputComponent } from './userinput/userinput.component';
import { investmentData } from './userdata.model';
import { returnsData } from './investment-returns/investment-returns.model';
import { InvestmentReturnsComponent } from './investment-returns/investment-returns.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserinputComponent, InvestmentReturnsComponent],
})
export class AppComponent {
  resultsData?: returnsData[];
  calculateInvestmentResults(data: investmentData) {
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          data.initialInvestment + data.annualInvestment * year,
      });
    }
    this.resultsData = annualData;
  }
}
