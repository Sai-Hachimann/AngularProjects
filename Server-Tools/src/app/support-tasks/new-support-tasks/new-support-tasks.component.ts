import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from '../../shared/control/control.component';
@Component({
  selector: 'app-new-support-tasks',
  standalone: true,
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-support-tasks.component.html',
  styleUrl: './new-support-tasks.component.css',
})
export class NewSupportTasksComponent {}
