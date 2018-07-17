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
export class Gate {
  type: string;
  truthTable = [];
  maxInputs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  inputCount = 0;
  constructor() { }

  setGateType(type) {
    this.type = type;
  }

  evaluate(input: number[], isClocked, clockInput): boolean {
    this.inputCount = input.length;
    let result = false;

    // sum of values from the input array
    // ex. [0, 1, 1, 0] = 2
    const inputSum = input.reduce(function(total, value) {
      return total + value;
    });

    // clock value is set, AND isClocked
    // clock value isn't set AND isn't isClocked
    if ((clockInput && isClocked) || (!clockInput && !isClocked)) {
      switch (this.type) {
        case 'AND': // values should total to the length of the input array
          result = inputSum === input.length;
          break;
        case 'OR': // values should total to greater than 0
          result = inputSum > 0;
          break;
        case 'NAND': // values should total to than the length of the input array
          result = inputSum < input.length;
          break;
        case 'NOR': // values should total to zero
          result = inputSum === 0;
          break;
        case 'XOR': // values should total to be 1
          result = inputSum === 1;
          break;
        case 'XNOR': // values should total to be either 0 or the length of the inputs array
          result = inputSum === 0 || inputSum === input.length;
          break;
        default:
          result = false;
      }
      // clock value is not set AND isClocked
    } else if (isClocked && !clockInput) {
      result = false;
    }
    return result;
  }


  generateTruthTable(inputs): void {
    const truthTableInputs: number[] = [];
    const inputArr: number[] = [];

    this.getTruthTableInputs(inputArr, inputs, truthTableInputs);
    this.generateTruthTableResult(truthTableInputs);
  }

  /**
   * loop from 1 to 0 through as many inputs as needed
   *
   * @param inputArr empty array
   * @param inputs number amount of inputs
   */
  getTruthTableInputs(inputArr, inputs, truthTableInputs): void {
    for (let i = 0; i < 2; i++) {
      inputArr.push(i);
      if (inputArr.length < inputs) {
        this.getTruthTableInputs(inputArr, inputs, truthTableInputs);
      } else {
        truthTableInputs.push(inputArr.slice(-inputs));
        inputArr.pop();
      }
    }
    inputArr.pop();
  }

  /**
   * Sort truth table inputs, assign to
   * truth table with X value as the evaluated result
   */
  generateTruthTableResult(truthTableInputs): void {

    // convert all letters to lower case (used in variables)
    // ex ['A', 'B', 'C'] = ['a', 'b', 'c']
    const inputLetters = this.maxInputs.map(function(letter) {
      return letter.toLowerCase();
    });

    let singleInputs = {};
    let input: number;
    // clear truth table values;
    this.truthTable = [];
    truthTableInputs.sort();

    // loop through each set of inputs
    for (const inputs of truthTableInputs) {
      singleInputs = {};

      // loop through each individual input, assign it a letter and the input value
      for (let index = 0; index < inputs.length; index++) {
        input = inputs[index];
        singleInputs[inputLetters[index]] = input;
      }

      // add the evaluated output value
      singleInputs['x'] = + this.evaluate(inputs, null, null);
      this.truthTable.push(singleInputs);
    }
    this.truthTable.sort();
  }
}
