import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Gate } from '../gate';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss']
})
export class TruthTableComponent implements OnInit, OnChanges {
  private _gate: Gate;
  @Input()
  set gate(gate: Gate) {
    this._gate = gate;
  }

  get gate(): Gate { return this._gate; }
  dataSource;
  inputs: number; // TODO dynamically updated based on
  displayedColumns = ['A', 'B', 'X']; // base value

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    const inputCount = this._gate.getInputCount();
    const maxInputs = this._gate.getMaxInputs();

    this._gate.generateTruthTable(inputCount);
    this.inputs = inputCount;
    // update displayed columns to match input
    this.displayedColumns = maxInputs.slice(0, inputCount);
    this.displayedColumns.push('X');
    this.dataSource = this._gate.getTruthTable();
  }
}
