import { Node } from "./node.js";
import { NodeSet } from "./node.js";

export class LinkedList {
  constructor() {}

  prepend(key, value) {
    if (value) this.head = new Node(key, value, this.head);
    else this.head = new NodeSet(key, this.head);
  }

  append(key, value) {
    if (!this.head) this.prepend(key, value);
    else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      if (value) {
        const newNode = new Node(key, value, null);
        tmp.nextNode = newNode;
      } else {
        const newNode = new NodeSet(key, null);
        tmp.nextNode = newNode;
      }
    }
  }

  contains(key) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.key === key) {
        return true;
      }
      tmp = tmp.nextNode;
    }
    return false;
  }

  fetchValue(key) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.key == key) {
        return tmp.value;
      }
      tmp = tmp.nextNode;
    }
    return null;
  }

  fetchValues() {
    const valuesArray = [];
    let tmp = this.head;
    while (tmp != null) {
      valuesArray.push(tmp.value);
      tmp = tmp.nextNode;
    }
    return valuesArray;
  }

  fetchKeys() {
    const keysArray = [];
    let tmp = this.head;
    while (tmp != null) {
      keysArray.push(tmp.key);
      tmp = tmp.nextNode;
    }
    return keysArray;
  }

  fetchEntries() {
    const entriesArray = [];
    let tmp = this.head;
    while (tmp != null) {
      entriesArray.push([tmp.key, tmp.value]);
      tmp = tmp.nextNode;
    }
    return entriesArray;
  }

  removeLL(key) {
    let curNode = this.head,
      prevNode = null;
    while (curNode != null) {
      if (curNode.key == key) {
        if (curNode == this.head) {
          this.head = curNode.nextNode;
        } else {
          prevNode.nextNode = curNode.nextNode;
        }
        return true;
      }
      prevNode = curNode;
      curNode = curNode.nextNode;
    }
    return false;
  }

  deleteAll() {
    delete this.head;
  }

  updateKeyValue(key, value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.key == key) {
        tmp.value = value;
      }
      tmp = tmp.nextNode;
    }
  }
}
