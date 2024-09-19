import { Component } from '@angular/core';
import { NewSupportTasksComponent } from './new-support-tasks/new-support-tasks.component';

@Component({
  selector: 'app-support-tasks',
  standalone: true,
  imports: [NewSupportTasksComponent],
  templateUrl: './support-tasks.component.html',
  styleUrl: './support-tasks.component.css',
})
export class SupportTasksComponent {}
