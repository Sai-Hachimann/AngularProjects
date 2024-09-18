import { Component, inject, computed } from '@angular/core';

import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-returns',
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
