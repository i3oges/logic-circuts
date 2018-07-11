import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gate",
  templateUrl: "./gate.component.html",
  styleUrls: ["./gate.component.scss"]
})
export class GateComponent implements OnInit {
  @Input() gate: String;
  output: boolean;
  isClocked: boolean = false;
  A: boolean = false;
  B: boolean = false;
  C: boolean = false;
  R: boolean = false;
  S: boolean = false;

  constructor() {}

  ngOnInit() {
    this.chooseGate();
  }

  chooseGate(): void {
    console.log(`${this.A} ${this.B} ${this.C} ${this.isClocked}`);
    if ((this.isClocked && this.C) || (!this.isClocked && !this.C)) {
      switch (this.gate) {
        case "AND":
          this.output = this.A && this.B;
          break;
        case "OR":
          this.output = this.A || this.B;
          break;
        case "NAND":
          this.output = !(this.A && this.B);
          break;
        case "NOR":
          this.output = !(this.A || this.B);
          break;
        case "XOR":
          this.output = (this.A && !this.B) || (!this.A && this.B);
          break;
        case "XNOR":
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
