import { Component, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { InvestmentInput } from '../app/investment-input-data.model';
import { InvestmentService } from '../app/investmnet-service';
@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrl: './user-input.component.css'
})
export class UserInputComponent {
    enteredInitialValue = signal('0');
    enteredAnnualValue = signal('0');
    enteredExpectedValue = signal('0');
    enteredDurationValue = signal('0');
    constructor(private investmentServices: InvestmentService) { }
    onSubmit() {
        this.investmentServices.calculateInvestmentResults({
            initialInvestment: +this.enteredInitialValue(),
            duration: +this.enteredDurationValue(),
            annualInvestment: +this.enteredAnnualValue(),
            expectedReturn: +this.enteredExpectedValue()
        })

        this.enteredAnnualValue.set('0');
        this.enteredDurationValue.set('0');
        this.enteredExpectedValue.set('0');
        this.enteredInitialValue.set('0');
    }
}
