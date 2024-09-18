import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-userinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userinput.component.html',
  styleUrl: './userinput.component.css',
})
export class UserinputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    annualInvestment: number;
    expectedReturn: number;
  }>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturns = '0';
  enteredDuration = '0';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturns,
    });
  }
}
