import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-gate-selector",
  templateUrl: "./gate-selector.component.html",
  styleUrls: ["./gate-selector.component.scss"]
})
export class GateSelectorComponent implements OnInit {
  isClocked: boolean = false;
  selectedGate: string;
  gateList: Array<string> = ["AND", "OR", "NAND", "NOR", "XOR", "XNOR"];

  constructor() {}

  ngOnInit() {}
}
