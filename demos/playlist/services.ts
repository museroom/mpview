import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

import { Timeline } from './timeline';

@Injectable()
export class TimelineService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private timelineUrl = 'api/v1/timelines';

  constructor(private http: Http) {}
}
