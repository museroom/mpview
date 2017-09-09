import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'highlight.js/styles/github.css';
import '../scss/angular-calendar.scss';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import * as hljsCss from 'highlight.js/lib/languages/css';
import * as hljsXml from 'highlight.js/lib/languages/xml';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
import { NgbTabsetModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoAppComponent } from './demo-app.component';
import { DemoComponent as DefaultDemoComponent } from './mpviews/kitchen-sink/component';
import { DemoModule as DefaultDemoModule } from './mpviews/kitchen-sink/module';
import { CatsComponent } from './cats.components';

export function hljsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  hljs.registerLanguage('css', hljsCss);
  hljs.registerLanguage('xml', hljsXml);
  return hljs;
}

@NgModule({
  declarations: [DemoAppComponent, CatsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbTabsetModule.forRoot(),
    NgbCollapseModule.forRoot(),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: hljsFactory
    }),
    DefaultDemoModule,
    RouterModule.forRoot(
      [
        {
          path: 'cats',
          component: CatsComponent,
          data: {
            label: 'Cats'
          }
        },
        {
          path: 'kitchen-sink',
          component: DefaultDemoComponent,
          data: {
            label: 'Kitchen sink'
          }
        },
        {
          path: 'async-events',
          loadChildren: './mpviews/async-events/module#DemoModule',
          data: {
            label: 'Async events'
          }
        },
        {
          path: 'optional-event-end-dates',
          loadChildren: './mpviews/optional-event-end-dates/module#DemoModule',
          data: {
            label: 'Optional event end dates'
          }
        },
        {
          path: 'editable-deletable-events',
          loadChildren: './mpviews/editable-deletable-events/module#DemoModule',
          data: {
            label: 'Editable / deletable events'
          }
        },
        {
          path: 'draggable-events',
          loadChildren: './mpviews/draggable-events/module#DemoModule',
          data: {
            label: 'Draggable events'
          }
        },
        {
          path: 'resizable-events',
          loadChildren: './mpviews/resizable-events/module#DemoModule',
          data: {
            label: 'Resizable events'
          }
        },
        {
          path: 'month-view-badge-total',
          loadChildren: './mpviews/month-view-badge-total/module#DemoModule',
          data: {
            label: 'Month view badge total'
          }
        },
        {
          path: 'recurring-events',
          loadChildren: './mpviews/recurring-events/module#DemoModule',
          data: {
            label: 'Recurring events'
          }
        },
        {
          path: 'custom-event-class',
          loadChildren: './mpviews/custom-event-class/module#DemoModule',
          data: {
            label: 'Custom event class'
          }
        },
        {
          path: 'clickable-events',
          loadChildren: './mpviews/clickable-events/module#DemoModule',
          data: {
            label: 'Clickable events'
          }
        },
        {
          path: 'clickable-days',
          loadChildren: './mpviews/clickable-days/module#DemoModule',
          data: {
            label: 'Clickable days'
          }
        },
        {
          path: 'day-view-start-end',
          loadChildren: './mpviews/day-view-start-end/module#DemoModule',
          data: {
            label: 'Day view start / end time'
          }
        },
        {
          path: 'day-view-hour-split',
          loadChildren: './mpviews/day-view-hour-split/module#DemoModule',
          data: {
            label: 'Day view hour split'
          }
        },
        {
          path: 'navigating-between-views',
          loadChildren: './mpviews/navigating-between-views/module#DemoModule',
          data: {
            label: 'Navigating between views'
          }
        },
        {
          path: 'before-view-render',
          loadChildren: './mpviews/before-view-render/module#DemoModule',
          data: {
            label: 'Before view render'
          }
        },
        {
          path: 'exclude-days',
          loadChildren: './mpviews/exclude-days/module#DemoModule',
          data: {
            label: 'Exclude Weekends'
          }
        },
        {
          path: 'i18n',
          loadChildren: './mpviews/i18n/module#DemoModule',
          data: {
            label: 'Internationalisation'
          }
        },
        {
          path: 'draggable-external-events',
          loadChildren: './mpviews/draggable-external-events/module#DemoModule',
          data: {
            label: 'Draggable external events'
          }
        },
        {
          path: 'all-day-events',
          loadChildren: './mpviews/all-day-events/module#DemoModule',
          data: {
            label: 'All day events'
          }
        },
        {
          path: 'customise-date-formats',
          loadChildren: './mpviews/customise-date-formats/module#DemoModule',
          data: {
            label: 'Customise date formats'
          }
        },
        {
          path: 'show-dates-on-titles',
          loadChildren: './mpviews/show-dates-on-titles/module#DemoModule',
          data: {
            label: 'Show dates on title'
          }
        },
        {
          path: 'disable-tooltips',
          loadChildren: './mpviews/disable-tooltips/module#DemoModule',
          data: {
            label: 'Disable tooltips'
          }
        },
        {
          path: 'additional-event-properties',
          loadChildren:
            './mpviews/additional-event-properties/module#DemoModule',
          data: {
            label: 'Additional event properties'
          }
        },
        {
          path: 'selectable-month-day',
          loadChildren: './mpviews/selectable-month-day/module#DemoModule',
          data: {
            label: 'Selectable month day'
          }
        },
        {
          path: 'min-max-date',
          loadChildren: './mpviews/min-max-date/module#DemoModule',
          data: {
            label: 'Min max date'
          }
        },
        {
          path: 'refreshing-the-view',
          loadChildren: './mpviews/refreshing-the-view/module#DemoModule',
          data: {
            label: 'Refreshing the view'
          }
        },
        {
          path: 'custom-templates',
          loadChildren: './mpviews/custom-templates/module#DemoModule',
          data: {
            label: 'Custom templates'
          }
        },
        {
          path: 'group-month-view-events',
          loadChildren: './mpviews/group-month-view-events/module#DemoModule',
          data: {
            label: 'Group month view events'
          }
        },
        {
          path: 'context-menu',
          loadChildren: './mpviews/context-menu/module#DemoModule',
          data: {
            label: 'Context menu'
          }
        },
        {
          path: 'week-view-minute-precision',
          loadChildren:
            './mpviews/week-view-minute-precision/module#DemoModule',
          data: {
            label: 'Week view minute precision'
          }
        },
        {
          path: 'extra-month-view-weeks',
          loadChildren: './mpviews/extra-month-view-weeks/module#DemoModule',
          data: {
            label: 'Extra month view weeks'
          }
        },
        {
          path: 'disable-slide-animation',
          loadChildren: './mpviews/disable-slide-animation/module#DemoModule',
          data: {
            label: 'Disable slide animation'
          }
        },
        {
          path: '**',
          redirectTo: 'kitchen-sink'
        }
      ],
      {
        useHash: true,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {}
