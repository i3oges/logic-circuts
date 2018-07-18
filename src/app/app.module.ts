import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GateSelectorComponent } from './gate-selector/gate-selector.component';
import { GateComponent } from './gate/gate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule,
  MatCardModule,
  MatDividerModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatRadioModule,
  MatGridListModule,
  MatTableModule,
  MatButtonModule
} from '@angular/material';
import { TruthTableComponent } from './truth-table/truth-table.component';

@NgModule({
  declarations: [AppComponent, GateSelectorComponent, GateComponent, TruthTableComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatChipsModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
