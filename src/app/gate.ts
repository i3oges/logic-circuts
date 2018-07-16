interface TruthTable {
  a: number[];
  b: number[];
  x: number[];
}

export class Gate {
  type: string;
  truthTable: any[] = [];
  truthTableInputs: TruthTable[] = [];
  constructor(type: string) {
    this.type = type;
  }
  evaluate(a: boolean, b: boolean, c: boolean, isClocked: boolean): boolean {
    let result: boolean;
    // clock value is set, AND isClocked
    // clock value isn't set AND isn't isClocked
    if ((c && isClocked) || (!c && !isClocked)) {
      switch (this.type) {
        case 'AND':
          result = a && b;
          break;
        case 'OR':
          result = a || b;
          break;
        case 'NAND':
          result = !(a && b);
          break;
        case 'NOR':
          result = !(a || b);
          break;
        case 'XOR':
          result = (a && !b) || (!a && b);
          break;
        case 'XNOR':
          result = !((a && !b) || (!a && b));
          break;
        default:
          result = false;
      }
    // clock value is not set AND isClocked
    } else if (isClocked && !c) {
      result = false;
    }

    return result;
  }
  generateTruthTable(inputs) {
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
    this.getTruthTableInputs(inputArr, inputs);
    this.generateTruthTableResult();
  }

  /**
   * loop from 1 to 0 through as many inputs as needed
   *
   * @param inputArr empty array
   */
  getTruthTableInputs(inputArr, inputs) {
    for (let i = 0; i < 2; i++) {
      inputArr.push(i);
      if (inputArr.length < inputs) {
        this.getTruthTableInputs(inputArr, inputs);
      } else {
        this.truthTableInputs.push(inputArr.slice(-inputs));
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
    }
  }
}

