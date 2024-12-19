import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InvestmentResultsComponent } from './investment-results/investment-results';
import { InvestmentService } from './investmnet-service';
import { UserInputModule } from '../user-input/user-input.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
    declarations: [
        AppComponent,       // Root component
        HeaderComponent,
        InvestmentResultsComponent,
    ],
    imports: [
        BrowserModule,      // Required for running Angular apps in the browser
        UserInputModule      // Template-driven forms support
    ],
    providers: [InvestmentService],
    bootstrap: [AppComponent] // Bootstrap the AppComponent
})
export class AppModule { }
