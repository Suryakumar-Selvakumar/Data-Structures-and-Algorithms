import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("cow");

list.pop();

list.insertAt("chicken", 5);

list.removeAt(0);

console.log(list.toString());
console.log("\n");

console.log(list.size());
console.log("\n");

console.log(list.headReturn());
console.log("\n");

console.log(list.tailReturn());
console.log("\n");

console.log(list.at(3));
console.log("\n");

console.log(list.contains("hamster"));
console.log("\n");

console.log(list.find("hamster"));

// All linkedList functions working, Yay!!
