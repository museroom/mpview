import { Component } from '@angular/core';

@Component({
  selector: 'mwl-playlist',
  templateUrl: './template.html',
  styles: [
    `
    h1 {
      color: rgba(255, 22, 6, 0.27)
    }
  `
  ]
})
export class PlaylistComponent {
  title = 'cats';
}
