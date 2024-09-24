import { Component } from '@angular/core';

@Component({
  selector: 'app-server-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './server-dashboard.component.html',
  styleUrl: './server-dashboard.component.css',
})
export class ServerDashboardComponent {
  // serverStatus = ['online', 'offline', 'unknown'];
  // randomIndex = Math.floor(Math.random() * this.serverStatus.length);

  // currentStatus = this.serverStatus[this.randomIndex];

  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    setInterval(() => {
      const randomVal = Math.random();

      if (randomVal < 0.5) {
        this.currentStatus = 'online';
      } else if (randomVal < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
