export abstract class Sorter {
  abstract length: number;
  abstract compare(left: number, right: number): boolean;
  abstract swap(left: number, right: number): void;
  sort = () => {
    const length = this.length;

    for (let iIndex = 0; iIndex < length; iIndex++) {
      for (let index = 0; index < length - iIndex - 1; index++) {
        if (this.compare(index, index + 1)) this.swap(index, index + 1);
      }
    }
  };
}
