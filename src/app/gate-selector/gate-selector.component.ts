import { Component, OnInit, OnChanges } from '@angular/core';
import { Gate } from '../gate';

@Component({
  selector: 'app-gate-selector',
  templateUrl: './gate-selector.component.html',
  styleUrls: ['./gate-selector.component.scss']
})
export class GateSelectorComponent implements OnInit, OnChanges {
  selectedGate: string;
  gateList: Array<string> = ['AND', 'OR', 'NAND', 'NOR', 'XOR', 'XNOR'];
  gate = new Gate();
  constructor() { }

  ngOnInit() { }
  ngOnChanges() { }

  updateGate(type) {
    this.gate.setGateType(type);
  }
}
