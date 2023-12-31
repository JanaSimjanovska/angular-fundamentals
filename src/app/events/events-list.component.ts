import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

@Component({
  template: ` <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail
          [event]="event"
          (click)="handleThumbnailCLick(event.name)"
        ></event-thumbnail>
      </div>
    </div>
  </div>`,
})
export class EventListComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}
  events: IEvent[];

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailCLick(eventName: string) {
    this.toastr.success(eventName);
  }
}
