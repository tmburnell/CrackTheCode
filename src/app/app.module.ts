import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
