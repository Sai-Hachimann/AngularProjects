import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentData } from '../userdata.model';
@Component({
  selector: 'app-userinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userinput.component.html',
  styleUrl: './userinput.component.css',
})
export class UserinputComponent {
  @Output() calculate = new EventEmitter<investmentData>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturns = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturns,
    });
  }
}
