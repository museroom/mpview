import { Component } from '@angular/core';
import { TimelineComponent } from './timeline-components';
import { PlaylistModule } from './module';

@Component({
  selector: 'mwl-playlist',
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class PlaylistComponent {
  title = 'cats';
}
