import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PlaylistComponent } from './playlist/components';
import { DemoComponent as DefaultDemoComponent } from './schedule/kitchen-sink/component';

const routes: Routes = [
  {
    path: 'playlist',
    component: PlaylistComponent,
    data: {
      label: 'Playlist'
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
    loadChildren: './schedule/async-events/module#DemoModule',
    data: {
      label: 'Async events'
    }
  },
  {
    path: 'optional-event-end-dates',
    loadChildren: './schedule/optional-event-end-dates/module#DemoModule',
    data: {
      label: 'Optional event end dates'
    }
  },
  {
    path: 'editable-deletable-events',
    loadChildren: './schedule/editable-deletable-events/module#DemoModule',
    data: {
      label: 'Editable / deletable events'
    }
  },
  {
    path: 'draggable-events',
    loadChildren: './schedule/draggable-events/module#DemoModule',
    data: {
      label: 'Draggable events'
    }
  },
  {
    path: 'resizable-events',
    loadChildren: './schedule/resizable-events/module#DemoModule',
    data: {
      label: 'Resizable events'
    }
  },
  {
    path: 'month-view-badge-total',
    loadChildren: './schedule/month-view-badge-total/module#DemoModule',
    data: {
      label: 'Month view badge total'
    }
  },
  {
    path: 'recurring-events',
    loadChildren: './schedule/recurring-events/module#DemoModule',
    data: {
      label: 'Recurring events'
    }
  },
  {
    path: 'custom-event-class',
    loadChildren: './schedule/custom-event-class/module#DemoModule',
    data: {
      label: 'Custom event class'
    }
  },
  {
    path: 'clickable-events',
    loadChildren: './schedule/clickable-events/module#DemoModule',
    data: {
      label: 'Clickable events'
    }
  },
  {
    path: 'clickable-days',
    loadChildren: './schedule/clickable-days/module#DemoModule',
    data: {
      label: 'Clickable days'
    }
  },
  {
    path: 'day-view-start-end',
    loadChildren: './schedule/day-view-start-end/module#DemoModule',
    data: {
      label: 'Day view start / end time'
    }
  },
  {
    path: 'day-view-hour-split',
    loadChildren: './schedule/day-view-hour-split/module#DemoModule',
    data: {
      label: 'Day view hour split'
    }
  },
  {
    path: 'navigating-between-views',
    loadChildren: './schedule/navigating-between-views/module#DemoModule',
    data: {
      label: 'Navigating between views'
    }
  },
  {
    path: 'before-view-render',
    loadChildren: './schedule/before-view-render/module#DemoModule',
    data: {
      label: 'Before view render'
    }
  },
  {
    path: 'exclude-days',
    loadChildren: './schedule/exclude-days/module#DemoModule',
    data: {
      label: 'Exclude Weekends'
    }
  },
  {
    path: 'i18n',
    loadChildren: './schedule/i18n/module#DemoModule',
    data: {
      label: 'Internationalisation'
    }
  },
  {
    path: 'draggable-external-events',
    loadChildren: './schedule/draggable-external-events/module#DemoModule',
    data: {
      label: 'Draggable external events'
    }
  },
  {
    path: 'all-day-events',
    loadChildren: './schedule/all-day-events/module#DemoModule',
    data: {
      label: 'All day events'
    }
  },
  {
    path: 'customise-date-formats',
    loadChildren: './schedule/customise-date-formats/module#DemoModule',
    data: {
      label: 'Customise date formats'
    }
  },
  {
    path: 'show-dates-on-titles',
    loadChildren: './schedule/show-dates-on-titles/module#DemoModule',
    data: {
      label: 'Show dates on title'
    }
  },
  {
    path: 'disable-tooltips',
    loadChildren: './schedule/disable-tooltips/module#DemoModule',
    data: {
      label: 'Disable tooltips'
    }
  },
  {
    path: 'additional-event-properties',
    loadChildren: './schedule/additional-event-properties/module#DemoModule',
    data: {
      label: 'Additional event properties'
    }
  },
  {
    path: 'selectable-month-day',
    loadChildren: './schedule/selectable-month-day/module#DemoModule',
    data: {
      label: 'Selectable month day'
    }
  },
  {
    path: 'min-max-date',
    loadChildren: './schedule/min-max-date/module#DemoModule',
    data: {
      label: 'Min max date'
    }
  },
  {
    path: 'refreshing-the-view',
    loadChildren: './schedule/refreshing-the-view/module#DemoModule',
    data: {
      label: 'Refreshing the view'
    }
  },
  {
    path: 'custom-templates',
    loadChildren: './schedule/custom-templates/module#DemoModule',
    data: {
      label: 'Custom templates'
    }
  },
  {
    path: 'group-month-view-events',
    loadChildren: './schedule/group-month-view-events/module#DemoModule',
    data: {
      label: 'Group month view events'
    }
  },
  {
    path: 'context-menu',
    loadChildren: './schedule/context-menu/module#DemoModule',
    data: {
      label: 'Context menu'
    }
  },
  {
    path: 'week-view-minute-precision',
    loadChildren: './schedule/week-view-minute-precision/module#DemoModule',
    data: {
      label: 'Week view minute precision'
    }
  },
  {
    path: 'extra-month-view-weeks',
    loadChildren: './schedule/extra-month-view-weeks/module#DemoModule',
    data: {
      label: 'Extra month view weeks'
    }
  },
  {
    path: 'disable-slide-animation',
    loadChildren: './schedule/disable-slide-animation/module#DemoModule',
    data: {
      label: 'Disable slide animation'
    }
  },
  {
    path: '**',
    redirectTo: 'kitchen-sink'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class DemoAppRoutingModule {}
