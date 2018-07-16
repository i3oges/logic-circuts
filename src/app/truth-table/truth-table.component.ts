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
  inputs = 2;
  displayedColumns = ['A', 'B', 'X'];
  constructor() { }

  ngOnInit() {
    const gate = new Gate(this.type);
    gate.generateTruthTable(this.inputs);
    this.dataSource = gate.truthTable;
  }

  ngOnChanges() {
    const gate = new Gate(this.type);
    gate.generateTruthTable(this.inputs);
    this.dataSource = gate.truthTable;
  }
}
