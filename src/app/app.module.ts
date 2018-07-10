import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GateSelectorComponent } from './gate-selector/gate-selector.component';
import { GateComponent } from './gate/gate.component';

@NgModule({
  declarations: [
    AppComponent,
    GateSelectorComponent,
    GateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
