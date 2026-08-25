import { Component  , signal , computed, Query} from '@angular/core';
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
  {title: 'Read Woman Evolve',
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


searchTerm = signal ('');





filteredDoneTasks = computed( () => {
  const query = this.searchTerm().toLowerCase();
  return this.tasks.filter(task => task.completed && task.title.toLowerCase().includes(query));
});

search(value:string){
  this.searchTerm.set(value);
}
}
