import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gate-selector',
  templateUrl: './gate-selector.component.html',
  styleUrls: ['./gate-selector.component.scss']
})
export class GateSelectorComponent implements OnInit {
  @Output() gateSelect = new EventEmitter();
  selectedGate: string;
  @Output() newInputs = new EventEmitter();
  gateList = ['AND', 'OR', 'NAND', 'NOR', 'XOR', 'XNOR', 'NOT'];

  constructor() { }

  ngOnInit() { }

  /**
   * Update gate for "child" components
   * @param type string - type of gate to set
   * @param inputs number - number of inputs
   */
  updateGate(type: string) {
    this.gateSelect.emit(type);
  }

  /**
   * Updates input count for current gate
   * @param newInputs number - number to add to the current inputs(1 or -1)
   */
  updateInputs(newInputs: number = 0) {
    this.newInputs.emit(`${newInputs}`);
  }
}
