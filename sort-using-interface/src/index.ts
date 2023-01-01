import { Sorter } from "./classes/Sorter";
import { StringCollection } from "./classes/StringCollections";

const strings = new StringCollection("adcd");

const stringToSort = new Sorter(strings);
stringToSort.sort();
console.log(stringToSort.data);
