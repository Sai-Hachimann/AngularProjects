import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';
import { CardComponent } from '../../shared/card/card.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TaskService);
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
    // this.complete.emit(this.task.id);
  }
}
