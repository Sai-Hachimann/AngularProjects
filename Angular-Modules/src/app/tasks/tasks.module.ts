import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/card/shared.module';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
})
export class TasksModule {}
