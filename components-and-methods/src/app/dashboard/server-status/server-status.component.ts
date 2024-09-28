import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
  signal,
  effect,
} from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.7) {
        this.currentStatus.set('online');
      } else {
        this.currentStatus.set('offline');
      }
    }, 3000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
