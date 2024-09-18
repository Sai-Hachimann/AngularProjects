import { Component, output, signal } from '@angular/core';
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
  calculate = output<investmentData>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturns = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      annualInvestment: +this.enteredAnnualInvestment(),
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
