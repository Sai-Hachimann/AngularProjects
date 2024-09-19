import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-shared-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './shared-dashboard.component.html',
  styleUrl: './shared-dashboard.component.css',
})
export class SharedDashboardComponet {
  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
