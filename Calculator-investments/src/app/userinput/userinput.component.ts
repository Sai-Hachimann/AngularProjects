import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-userinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userinput.component.html',
  styleUrl: './userinput.component.css',
})
export class UserinputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturns = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturns(),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredDuration.set('10');
    this.enteredExpectedReturns.set('5');
  }
}
// but in here you have to add () to execute and read the signal data
// if not you are reading entire signal instead
