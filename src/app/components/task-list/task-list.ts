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

  tasks = signal([
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
  ]);


addTask(newTaskTitle:string):void{
if (!newTaskTitle) {
  return ;
}

  const newTask = {
    title : newTaskTitle,
    completed: false }

    this.tasks.update(tasks => [...tasks, newTask]);
   
}
doneTask(selectedTask:{title:string ; completed:boolean}){
  this.tasks.update(tasks => tasks.map(task =>
    task === selectedTask ? { ...task, completed: !task.completed } : task
  ));
}


searchTerm = signal ('');





filteredDoneTasks = computed( () => {
  const search = this.searchTerm().toLowerCase();
  return this.tasks().filter(task => task.title.toLowerCase().includes(search));
});

search(value:string){
  this.searchTerm.set(value);
}

deleteTask(selectedTask: {title: string}) {
  this.tasks.update(tasks => tasks.filter(task => task !== selectedTask));
}
}
