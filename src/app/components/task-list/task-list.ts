import { Component  , signal , computed} from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task-list',
  imports: [DatePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  date = new Date(2026,7,18);

  tasks = [
  {title: 'Get Grace gifts',
    completed: true

  },
  {title: 'Visit the dentist',
   completed: true

  },
  {title: 'Go to the grocer store',
   completed: false

  },
  {title: 'Check on the virtual campus',
  completed: true

  },
  {title: 'Cook supper',
  completed: true

  },
  {title: 'Read WOman Evolve',
    completed: false

},
  {title: 'Take a shower',
    completed: true

  }
  ];

deleteTask(selectedTask: {title: string}) {
  this.tasks = this.tasks.filter(task => task !== selectedTask);
}
addTask(newTaskTitle:string):void{
  const newTask = {
    title : newTaskTitle,
    completed: false }

    this.tasks.push(newTask);
}
doneTask(selectedTask:{title:string ; completed:boolean}){
 selectedTask.completed = !selectedTask.completed;
}

//filters for month
months = signal(['January','February','March','April','May']);
searchTerm = signal ('');

filteredItems = computed(() => {
const lowerCaseSearchTerm = this.searchTerm().toLowerCase();
return this.months().filter( month => month.toLowerCase().includes(lowerCaseSearchTerm));

});
}
