export class NumbersCollection {
  constructor(public data: number[]) {}

  swap = (i: number, j: number) => {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
    console.log({ data: this.data });
  };
  compare = (i: number, j: number) => {
    return this.data[i] > this.data[j];
  };
  length = this.data.length;
}
