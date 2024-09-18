import { Component, input } from '@angular/core';
import { returnsData } from './investment-returns.model';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-returns',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-returns.component.html',
  styleUrl: './investment-returns.component.css',
})
export class InvestmentReturnsComponent {
  // @Input() returns?: returnsData[];
  returns = input<returnsData[]>();
}
