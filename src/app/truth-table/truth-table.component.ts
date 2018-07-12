import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-truth-table',
  templateUrl: './truth-table.component.html',
  styleUrls: ['./truth-table.component.scss']
})
export class TruthTableComponent implements OnInit {
  @Input() gate;
  truthTable: string[];
  constructor() { }

  ngOnInit() {
  }

  generateTruthTable(a: boolean = false, b: boolean = false): void {
    switch (this.gate) {
      case 'AND' :

    }
  }

}
