export class StringCollection {
  constructor(public data: string) {}

  swap = (i: number, j: number) => {
    const before = this.data.slice(0, i);
    const after = this.data.slice(j + 1, this.data.length);

    const leftHand = this.data[j];
    const rightHand = this.data[i];
    const twoSwappedChars = leftHand.concat(rightHand);

    this.data = before.concat(twoSwappedChars).concat(after);
  };
  compare = (i: number, j: number) => {
    return this.data[i].localeCompare(this.data[j]) > 0;
  };
  length = this.data.length;
}
