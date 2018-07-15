export class Gate {
  type: string;
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
}
