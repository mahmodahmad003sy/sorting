import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  swap = (i: number, j: number) => {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  };
  compare = (i: number, j: number) => {
    return this.data[i] > this.data[j];
  };
  length = this.data.length;
}
