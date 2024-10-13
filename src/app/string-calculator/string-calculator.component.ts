import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-string-calculator',
  standalone: true,  
  imports: [FormsModule, CommonModule],  
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.scss']
})
export class StringCalculatorComponent {
  numbers: string = ''; 
  sum: number | null = null; 
  errorMessage: string | null = null; 

  calculateSum(): void {
    try {
      this.sum = this.addNumbers(this.numbers); 
      this.errorMessage = null; 
    } catch (error: any) {
      this.sum = null;
      this.errorMessage = error.message; 
    }
  }

  addNumbers(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/; 
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    if (customDelimiterMatch) {
      delimiter = new RegExp(customDelimiterMatch[1]);
      numbers = numbers.slice(customDelimiterMatch[0].length);
    }

    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
