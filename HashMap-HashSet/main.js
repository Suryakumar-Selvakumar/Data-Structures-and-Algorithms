import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";

const hashMap = new HashMap(16, 0.75);

hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("hat", "black");
hashMap.set("ice cream", "white");
hashMap.set("jacket", "blue");
hashMap.set("kite", "pink");
hashMap.set("lion", "golden");

// Overwriting few nodes
hashMap.set("apple", "dark-red");
hashMap.set("jacket", "black");
hashMap.set("lion", "brown");

// Adding this node will make HashMap exceed its current load factor
// so HashMap should expand
// hashMap.set("moon", "silver");

// Checking if all methods of HashMap work for base one and expanded one
// Uncomment each method, then run in console to check it out

// set() - Works for both
//Overwriting few nodes after the HashMap was expanded
// hashMap.set("ice cream", "orange");
// hashMap.set("kite", "yellow");
// hashMap.set("hat", "white");

// get() - Works for both
// console.log(hashMap.get("ice cream"));

// has(key) - Works for both
// console.log(hashMap.has("moon"));

// remove(key) - Works for both
// console.log(hashMap.remove("moon"));
// console.log(hashMap.has("moon"));

// length() - Works for both
//console.log(hashMap.length());

//clear() - Works for both
// console.log(hashMap.clear());
// console.log(hashMap);
// console.log(hashMap.has("moon"));

// keys() - Works for both
// console.log(hashMap.keys());

// values() - Works for both
// console.log(hashMap.values());

// entries() - Works for both
console.log(hashMap);
console.log(hashMap.entries());

const hashSet = new HashSet(16, 0.75);

hashSet.set("apple");
hashSet.set("banana");
hashSet.set("carrot");
hashSet.set("dog");
hashSet.set("elephant");
hashSet.set("frog");
hashSet.set("grape");
hashSet.set("hat");
hashSet.set("ice cream");
hashSet.set("jacket");
hashSet.set("kite");
hashSet.set("lion");

hashSet.set("apple");
hashSet.set("jacket");
hashSet.set("lion");

// Testing all functions for HashSet

// set()
hashSet.set("moon");

// has()
// console.log(hashSet.has("moon"));

// remove()
// console.log(hashSet.remove("moon"));
// console.log(hashSet.has("moon"));

// length()
// console.log(hashSet.length());

// clear()
// console.log(hashSet.clear());
// console.log(hashSet);

// keys()
// console.log(hashSet.keys());
