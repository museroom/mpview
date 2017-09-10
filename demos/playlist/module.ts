import { NgModule } from '@angular/core';
import { TimelineComponent } from './timeline-components';
import { HttpModule } from '@angular/http';
import { PlaylistComponent } from './components';
import { TimelineService } from './timeline-services';

@NgModule({
  imports: [HttpModule],
  exports: [PlaylistComponent],
  declarations: [PlaylistComponent, TimelineComponent],
  providers: [TimelineService]
})
export class PlaylistModule {}
