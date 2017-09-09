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
import { NgbTabsetModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoAppRoutingModule } from './demo-app-route';
import { DemoAppComponent } from './demo-app.component';
import { DemoComponent as DefaultDemoComponent } from './mpviews/kitchen-sink/component';
import { DemoModule as DefaultDemoModule } from './mpviews/kitchen-sink/module';
import { PlaylistComponent } from './mpviews/playlist/components';

export function hljsFactory(): any {
  hljs.registerLanguage('typescript', hljsTypescript);
  hljs.registerLanguage('css', hljsCss);
  hljs.registerLanguage('xml', hljsXml);
  return hljs;
}

@NgModule({
  declarations: [DemoAppComponent, PlaylistComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbTabsetModule.forRoot(),
    NgbCollapseModule.forRoot(),
    DefaultDemoModule,
    DemoAppRoutingModule
  ],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {}
