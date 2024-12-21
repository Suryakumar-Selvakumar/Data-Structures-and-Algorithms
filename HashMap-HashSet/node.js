export class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}

class NodeSet {
  constructor(key = null, nextNode = null) {
    this.key = key;
    this.nextNode = nextNode;
  }
}

export { NodeSet };
