import { Component } from '@angular/core';
import { Gate } from './gate';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gate = new Gate();
  inputs = 2;
  isGateSelected: boolean;

  onSelectGate(type) {
    this.gate = new Gate();
    this.gate.setGateType(type);
    this.gate.setInputCount(this.inputs);
    this.isGateSelected = true;
  }

  onUpdateInputs(change) {
    this.inputs += +change;
    if (this.inputs < 1) {
      this.inputs = 1;
    }
    this.onSelectGate(this.gate.getGateType());
  }
}
