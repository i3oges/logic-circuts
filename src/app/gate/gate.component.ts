import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})
export class GateComponent implements OnInit, OnChanges {
  @Input() gate: String;
  output: boolean;
  isClocked = false;
  A = false;
  B = false;
  C = false;
  R = false;
  S = false;

  constructor() { }
  ngOnChanges(changes): void {
    this.chooseGate();
  }
  ngOnInit() {
    this.chooseGate();
  }

  chooseGate(): void {
    if ((this.isClocked && this.C) || (!this.isClocked && !this.C)) {
      switch (this.gate) {
        case 'AND':
          this.output = this.A && this.B;
          break;
        case 'OR':
          this.output = this.A || this.B;
          break;
        case 'NAND':
          this.output = !(this.A && this.B);
          break;
        case 'NOR':
          this.output = !(this.A || this.B);
          break;
        case 'XOR':
          this.output = (this.A && !this.B) || (!this.A && this.B);
          break;
        case 'XNOR':
          this.output = !((this.A && !this.B) || (!this.A && this.B));
          break;
        default:
          this.output = false;
      }
    } else {
      this.output = false;
    }
  }
}
