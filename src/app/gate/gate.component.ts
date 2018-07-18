import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Gate } from '../gate';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit, OnChanges {
  private _gate: Gate;

  @Input()
  set gate(gate: Gate) {
    this._gate = gate;
  }

  get gate(): Gate { return this._gate; }

  output: boolean;
  isClocked = false;
  clock = false;

  intInput = [];
  inputs = [];


  constructor() {

  }
  ngOnChanges(): void {
    const inputCount = this._gate.getInputCount();
    const maxInputs = this._gate.getMaxInputs();

    // empty array with set number of inputs equal to inputAmt to be referenced in html
    // ex [0,0,0]
    this.intInput = maxInputs.slice(0, inputCount).map(function (i) {
      return 0;
    });
    // create inputs string
    // ex ['A', 'B', 'C']
    this.inputs = maxInputs.slice(0, inputCount);
    this.chooseGate();
  }
  ngOnInit() {

  }

  chooseGate(): void {
    if (!this.isClocked) {
      this.clock = false;
    }
    this._gate.setIsClocked(this.isClocked);
    this._gate.setClockInput(this.clock);
    // cast the true/false value as in integer
    this.intInput.map(function (i) {
      return +i;
    });

    this.output = this._gate.evaluate(this.intInput);
  }
}
