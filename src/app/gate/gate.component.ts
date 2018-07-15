import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Gate } from '../gate';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit, OnChanges {
  @Input() type: string;
  gate: Gate;
  output: boolean;
  isClocked = false;
  A = false;
  B = false;
  C = false;

  constructor() {
  }
  ngOnChanges(): void {
    this.gate = new Gate(this.type);
    this.chooseGate();
  }
  ngOnInit() {
    this.gate = new Gate(this.type);
    this.chooseGate();
  }

  chooseGate(): void {
    if (!this.isClocked) {
      this.C = false;
    }
    this.output = this.gate.evaluate(this.A, this.B, this.C, this.isClocked);
  }
}
