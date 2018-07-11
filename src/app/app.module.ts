import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { GateSelectorComponent } from "./gate-selector/gate-selector.component";
import { GateComponent } from "./gate/gate.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [AppComponent, GateSelectorComponent, GateComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
