class SampleAdd {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }
}

const s = new SampleAdd(3, 5);
console.log("Calling Add function: ", s.add());
