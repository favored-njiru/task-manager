import { Component ,signal , computed} from '@angular/core';
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

total = computed (
  () => {
      switch (this.operator()) {
        case '+' :
      return  Number(this.num1()) + Number(this.num2());
        
        case '-' :
       return    Number(this.num1()) - Number(this.num2());

          case '*' :
        return    Number(this.num1()) * Number(this.num2());

            default: return 0;
        }
      }
  
);




}


