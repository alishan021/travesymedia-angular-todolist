import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: "", title: "Tasks", component: TasksComponent },
    { path: "about", title: "About", component: AboutComponent }
];
