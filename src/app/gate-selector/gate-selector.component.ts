import { Component, OnInit, OnChanges } from '@angular/core';
import { Gate } from '../gate';

@Component({
  selector: 'app-gate-selector',
  templateUrl: './gate-selector.component.html',
  styleUrls: ['./gate-selector.component.scss']
})
export class GateSelectorComponent implements OnInit {
  gate = new Gate();
  selectedGate: string;
  inputs = 2;
  gateList = this.gate.getGateList();
  newGate;
  constructor() { }

  ngOnInit() { }

  /**
   * Update gate for "child" components
   * @param type string - type of gate to set
   * @param inputs number - number of inputs
   */
  updateGate(type: string) {
    this.gate = new Gate();
    this.gate.setGateType(type);
    this.gate.setInputCount(this.inputs);
  }

  /**
   * Updates input count for current gate
   * @param newInputs number - number to add to the current inputs(1 or -1)
   */
  updateInputs(newInputs: number = 0) {
    this.inputs += newInputs;
    if (this.inputs < 2) {
      this.inputs = 2;
    }
    this.updateGate(this.gate.getGateType());
  }
}
