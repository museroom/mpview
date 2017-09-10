import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'highlight.js/styles/github.css';
import '../scss/angular-calendar.scss';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as hljs from 'highlight.js/lib/highlight';
import * as hljsTypescript from 'highlight.js/lib/languages/typescript';
import * as hljsCss from 'highlight.js/lib/languages/css';
import * as hljsXml from 'highlight.js/lib/languages/xml';
import { NgbTabsetModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoAppRoutingModule } from './demo-app-route';
import { DemoAppComponent } from './demo-app.component';
import { DemoComponent as DefaultDemoComponent } from './schedule/kitchen-sink/component';
import { DemoModule as DefaultDemoModule } from './schedule/kitchen-sink/module';
import { PlaylistModule } from './playlist/module';

@NgModule({
  declarations: [DemoAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbTabsetModule.forRoot(),
    NgbCollapseModule.forRoot(),
    DefaultDemoModule,
    DemoAppRoutingModule,
    PlaylistModule
  ],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {}
