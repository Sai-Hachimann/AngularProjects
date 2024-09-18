import { Component, inject, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-returns',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-returns.component.html',
  styleUrl: './investment-returns.component.css',
})
export class InvestmentReturnsComponent {
  // @Input() returns?: returnsData[];
  // returns = input<returnsData[]>();
  // constructor(private investmentService: InvestmentService) {}
  private investmentService = inject(InvestmentService);

  // get returns() {
  //   return this.investmentService.resultData;
  // } (or)
  // returns = this.investmentService.resultData.asReadonly(); (or)
  returns = computed(() => this.investmentService.resultData());
}
