import { NumbersCollection } from "./NumberCollections";
import { StringCollection } from "./StringCollections";

export class Sorter {
  constructor(public data: NumbersCollection | StringCollection) {}
  sort = () => {
    const length = this.data.length;

    for (let iIndex = 0; iIndex < length; iIndex++) {
      for (let index = 0; index < length - iIndex - 1; index++) {
        if (this.data.compare(index, index + 1))
          this.data.swap(index, index + 1);
      }
    }
  };
}
