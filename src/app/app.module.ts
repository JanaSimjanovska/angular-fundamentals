import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
  DurationPipe
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
