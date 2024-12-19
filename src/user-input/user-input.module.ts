import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './user-input.component';

@NgModule({
    declarations: [UserInputComponent], // Declare the component
    imports: [FormsModule],             // Import FormsModule for ngModel
    exports: [UserInputComponent]       // Export the component for use in other modules
})
export class UserInputModule { }
