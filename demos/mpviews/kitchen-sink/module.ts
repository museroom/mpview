import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../demo-utils/module';
import { DemoComponent } from './component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoModule {}
