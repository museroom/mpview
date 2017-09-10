import { Component, Input } from '@angular/core';
import { Timeline } from './timeline';
import { TimelineService } from './timeline-services';
import { Router } from '@angular/router';
import { AppConfig } from '../demo-app-config';
import {
  state,
  style,
  trigger,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'mwl-playlist-timeline',
  templateUrl: 'timeline-template.html',
  animations: [
    trigger('buttonState', [
      state(
        'inactive',
        style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        })
      ),
      state(
        'active',
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })
      ),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class TimelineComponent {
  timelines: Timeline[];
  selectedTimeline: Timeline;
  debug_message: string;
  serverUrl: string;

  @Input() state1: string;

  constructor(
    private timelineService: TimelineService,
    private router: Router,
    private config: AppConfig
  ) {
    this.serverUrl = config.getServer();
    this.timelines = [
      new Timeline(1, 'timeline 1'),
      new Timeline(2, 'timeline 2'),
      new Timeline(1, 'timeline 1'),
      new Timeline(2, 'timeline 2'),
      new Timeline(1, 'timeline 1'),
      new Timeline(2, 'timeline 2'),
      new Timeline(1, 'timeline 1'),
      new Timeline(2, 'timeline 2'),
      new Timeline(1, 'timeline 1'),
      new Timeline(2, 'timeline 2')
    ];
  }

  toggle1(): void {
    this.state1 = this.state1 === 'active' ? 'inactive' : 'active';
    console.log('toggle:' + this.state1);
  }

  update(): void {
    // const msg = AppConfig.get('baseUrl');
    this.debug_message = this.config.getServer();
  }

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
