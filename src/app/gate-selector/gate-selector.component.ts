import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gate-selector",
  templateUrl: "./gate-selector.component.html",
  styleUrls: ["./gate-selector.component.scss"]
})
export class GateSelectorComponent implements OnInit {
  selectedGate: string;
  isClocked: boolean = false;

  gateList: Array<string> = ["AND", "OR", "NAND", "NOR", "XOR", "XNOR"];

  constructor() {}

  ngOnInit() {}
}
