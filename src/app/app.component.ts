import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UserInputComponent } from '../user-input/user-input.component';
import type { InvestmentInput } from './investment-input-data.model';
import { InvestmentResultsComponent } from './investment-results/investment-results';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent { }
