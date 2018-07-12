export class Gate {
  type: string;
  result: boolean;
  constructor(type: string, a: boolean, b: boolean) {
    this.type = type;
  }
  evaluate(a, b): boolean {
    switch (this.type) {
      case 'AND':
        this.result = a && b;
        break;
      case 'OR':
        this.result = a || b;
        break;
      case 'NAND':
        this.result = !(a && b);
        break;
      case 'NOR':
        this.result = !(a || b);
        break;
      case 'XOR':
        this.result = (a && !b) || (!a && b);
        break;
      case 'XNOR':
        this.result = !((a && !b) || (!a && b));
        break;
      default:
        this.result = false;
    }
    return this.result;
  }
}
