import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Gate } from '../gate';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss']
})
export class TruthTableComponent implements OnInit, OnChanges {
  @Input() type: string;
  truthTable: any[] = [];
  truthTableInputs: TruthTable[] = [];
  dataSource;
  inputs = 2;
  displayedColumns = ['A', 'B', 'X'];
  constructor() { }

  ngOnInit() {
    this.generateTruthTable();
  }

  ngOnChanges() {
    this.generateTruthTable();
  }

  generateTruthTable() {
    this.truthTableInputs = [];
    this.truthTable = [];
    const inputArr: any[] = [];
    /**
     * Truth table AND gate example (2 inputs)
     * A | B | X
     * 0 | 0 | 0
     * 1 | 0 | 0
     * 0 | 1 | 0
     * 1 | 1 | 1
     *
     * inputs are a 2 dimensional array like this
     * [
     *  [0,0],
     *  [1,0],
     *  [0,1],
     *  [1,1]
     * ]
     */
    this.getTruthTableInputs(inputArr);
    this.generateTruthTableResult();
  }

  /**
   * loop from 1 to 0 through as many inputs as needed
   *
   * @param inputArr empty array
   */
  getTruthTableInputs(inputArr) {
    for (let i = 0; i < 2; i++) {
      inputArr.push(i);
      if (inputArr.length < this.inputs) {
        this.getTruthTableInputs(inputArr);
      } else {
        this.truthTableInputs.push(inputArr.slice(-this.inputs));
        inputArr.pop();
      }
    }
    inputArr.pop();
  }

  /**
   * Sort truth table inputs, assign to
   * truth table with X value as the evaluated result
   */
  generateTruthTableResult() {
    this.truthTableInputs.sort();
    const gate = new Gate(this.type);
    for (const inputs of this.truthTableInputs) {
      this.truthTable.push({
        a: inputs[0],
        b: inputs[1],
        x: + gate.evaluate(inputs[0], inputs[1], null, null)
      });
      this.dataSource = this.truthTable;
    }
  }
}

interface TruthTable {
  a: number[];
  b: number[];
  x: number[];
}
