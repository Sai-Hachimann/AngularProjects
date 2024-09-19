import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-new-support-tasks',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './new-support-tasks.component.html',
  styleUrl: './new-support-tasks.component.css'
})
export class NewSupportTasksComponent {

}
