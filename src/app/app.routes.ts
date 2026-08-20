import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { TaskList } from './components/task-list/task-list';
export const routes: Routes = [
    {
        path: 'login' , 
        component: Login 
    },
   {
        path: 'dashboard' , 
        component: Dashboard
    },
    {
        path: 'task-list' ,
        component: TaskList
    }
];
