import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor(capacity, loadFactor) {
    this.buckets = [];
    this.capacity = capacity;
    for (let i = 0; i < capacity; i++) {
      this.buckets.push(new LinkedList());
    }
    this.loadFactor = loadFactor;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.buckets[index].contains(key))
      this.buckets[index].updateKeyValue(key, value);
    else this.buckets[index].append(key, value);

    // Code to grow the bucket
    let growthFactor = this.capacity * this.loadFactor;
    if (this.length() > growthFactor) {
      const doubleBucketsArray = [];
      this.capacity = this.capacity * 2;
      for (let i = 0; i < this.capacity; i++) {
        doubleBucketsArray.push(new LinkedList());
      }
      doubleBucketsArray.forEach((newBucket) => {
        this.buckets.forEach((oldBucket) => {
          if (
            doubleBucketsArray.indexOf(newBucket) ==
            this.buckets.indexOf(oldBucket)
          ) {
            const entriesArray = oldBucket.fetchEntries();
            entriesArray.forEach((keyValPair) => {
              newBucket.append(keyValPair[0], keyValPair[1]);
            });
          }
        });
      });

      this.buckets = [...doubleBucketsArray];
    }
  }

  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
    return this.buckets[index].fetchValue(key);
  }

  has(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }
    if (Object.keys(this.buckets[index]).length !== 0) {
      return this.buckets[index].contains(key);
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    if (Object.keys(this.buckets[index]).length !== 0) {
      return this.buckets[index].removeLL(key);
    }
  }

  length() {
    return this.keys().length;
  }

  clear() {
    this.buckets.forEach((bucket) => {
      bucket.deleteAll();
    });
  }

  keys() {
    let keysArray = [];
    this.buckets.forEach((bucket) => {
      keysArray = keysArray.concat(bucket.fetchKeys());
    });
    return keysArray;
  }

  values() {
    let valuesArray = [];
    this.buckets.forEach((bucket) => {
      valuesArray = valuesArray.concat(bucket.fetchValues());
    });
    return valuesArray;
  }

  entries() {
    let entriesArray = [];
    this.buckets.forEach((bucket) => {
      entriesArray = entriesArray.concat(bucket.fetchEntries());
    });
    return entriesArray;
  }
}
