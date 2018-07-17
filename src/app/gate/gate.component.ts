import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Gate } from '../gate';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit, OnChanges {
  @Input() gate: Gate;
  output: boolean;
  isClocked = false;

  // TODO app doesn't update when new gate is selected until an input is selected

  // TODO make this work
  // variable amount of inputs based on inputAmt, later to be updated in UI
  inputAmt = 3;

  intInput = [];
  inputs = [];

  clock = false;

  constructor() {

  }
  ngOnChanges(): void {
    // empty array with set number of inputs equal to inputAmt to be referenced in html
    // ex [0,0,0]
    this.intInput = this.gate.maxInputs.slice(0, this.inputAmt).map(function (i) {
      return 0;
    });
    // create inputs string
    // ex ['A', 'B', 'C']
    this.inputs = this.gate.maxInputs.slice(0, this.inputAmt);
    this.chooseGate();
  }
  ngOnInit() {

  }

  chooseGate(): void {
    if (!this.isClocked) {
      this.clock = false;
    }
    // cast the true/false value as in integer
    this.intInput.map(function (i) {
      return +i;
    });

    this.output = this.gate.evaluate(this.intInput, this.isClocked, this.clock);
  }
}
