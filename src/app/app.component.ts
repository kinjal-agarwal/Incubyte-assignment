import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringCalculatorComponent } from './string-calculator/string-calculator.component'; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, StringCalculatorComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Incubyte-assignment';
}
