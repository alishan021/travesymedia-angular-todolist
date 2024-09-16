import { Component } from '@angular/core';
import { TaskItemComponent } from "../task-item/task-item.component";
import { TaskService } from '../../services/task-service.service';
import { Task } from '../../Task';
import { AddTaskComponent } from "../add-task/add-task.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent, AddTaskComponent, RouterModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private taskService: TaskService) {}

  tasks: Task[] = [];

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
    })
  }

  ToggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task: Task) => {
      this.tasks.push(task);
    })
  }
}
