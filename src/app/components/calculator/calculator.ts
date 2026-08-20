import { Component ,signal} from '@angular/core';
import { OperatorFunction } from 'rxjs';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
   num1 = signal(0);
   num2 = signal (0);
   operator = signal('+');
}
