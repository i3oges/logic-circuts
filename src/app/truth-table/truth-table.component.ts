import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Gate } from '../gate';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss']
})
export class TruthTableComponent implements OnInit, OnChanges {
  @Input() type: string;
  dataSource;
  inputs = 2; // TODO dynamically updated based on
  displayedColumns = ['A', 'B', 'X']; // base value
  gate = new Gate();
  possibleColumns = this.gate.maxInputs;
  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    this.gate.setGateType(this.type);
    this.gate.generateTruthTable(this.inputs);

    // update displayed columns to match input
    this.displayedColumns = this.possibleColumns.slice(0, this.inputs);
    this.displayedColumns.push('X');
    this.dataSource = this.gate.truthTable;
  }
}
