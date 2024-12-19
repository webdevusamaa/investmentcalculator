import { Component, inject, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investmnet-service';
@Component({
    selector: 'app-investment-results',
    templateUrl: './investment-results.html',
    styleUrl: './investment-results.css'
})
export class InvestmentResultsComponent {
    private investmentService = inject(InvestmentService)

    results = this.investmentService.resultData.asReadonly();
}



// @Input() results?: {
//     year: number;
//     interest: number;
//     valueEndOfYear: number;
//     annualInvestment: number;
//     totalInterest: number;
//     totalAmountInvested: number;
// }[];    
