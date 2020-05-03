import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [AppComponent, NavComponent, SidenavComponent],
  imports: [BrowserModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
