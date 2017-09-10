import { Component } from '@angular/core';
import { Timeline } from './timeline';
import { TimelineService } from './timeline-services';
import { Router } from '@angular/router';

@Component({
  selector: 'mwl-playlist-timeline',
  template: `
    <h2>Timeline</h2>
  `
})
export class TimelineComponent {
  timelines: Timeline[];
  selectedTimeline: Timeline;

  constructor(
    private timelineService: TimelineService,
    private router: Router
  ) {}

  getTimelines(): void {
    this.timelineService
      .getTimelines()
      .then(timelines => (this.timelines = timelines));
  }

  getTimeline(): void {
    this.timelineService
      .getTimeline()
      .then(timeline => (this.selectedTimeline = timeline));
  }
}
