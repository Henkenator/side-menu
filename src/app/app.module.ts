import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
