import { Component } from '@angular/core';

@Component({
  selector: 'mwl-my-cats',
  template: `
    <h1>cats {{title}}</h1>
  `,
  styles: [
    `
      h1 {
        color: #f9000e;
      }
    `
  ]
})
export class CatsComponent {
  title = 'cats';
}