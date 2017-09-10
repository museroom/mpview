import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'highlight.js/styles/github.css';
import '../scss/angular-calendar.scss';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbTabsetModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoAppRoutingModule } from './demo-app-route';
import { DemoAppComponent } from './demo-app.component';
import { DemoComponent as DefaultDemoComponent } from './schedule/kitchen-sink/component';
import { DemoModule as DefaultDemoModule } from './schedule/kitchen-sink/module';
import { PlaylistModule } from './playlist/module';
import { AppConfig } from './demo-app-config';

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
  providers: [AppConfig],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {}
