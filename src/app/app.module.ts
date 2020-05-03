import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { SidebarModule } from 'ng-sidebar';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [AppComponent, NavComponent, SidenavComponent, UserDashboardComponent],
  imports: [BrowserModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
