import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerDashboardComponent } from './server-dashboard/server-dashboard.component';
import { ServerDashboardItemComponent } from './server-dashboard-item/server-dashboard-item.component';
import { SupportTasksComponent } from './support-tasks/support-tasks.component';
import { SharedDashboardComponet } from './shared-dashboard/shared-dashboard.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ServerDashboardComponent,
    ServerDashboardItemComponent,
    SupportTasksComponent,
    SharedDashboardComponet,
  ],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
