//piece of data -val
//reference to next node -null

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    //return first el
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count = 0;
    var current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    var beforeNode = this.get(index - 1);
    var removeNode = beforeNode.next;
    beforeNode.next = removeNode.next;
    removeNode.next = null;
    this.length--;
    return removeNode;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (let index = 0; index < this.length; index++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var temp = this.head;
    while (temp !== null) {
      arr.push(temp.val);
      temp = temp.next;
    }
    console.log(arr);
  }
}

// let first = new Node(3)
//first.next = new Node(4)
///first.next.next = new Node(5)

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

// console.log(list.insert(-1, 5));
// console.log(list.insert(100, 5));
// console.log(list.insert(0, 5));
// console.log(list.insert(5, 50));
// console.log(list.insert(2, 15));
// console.log(list.remove(-1));
// console.log(list.remove(6));
// console.log(list.remove(0));
// console.log(list.remove(list.length - 1));
// console.log(list.remove(1));
console.log(list.print());
console.log(list.reverse());
console.log(list.print());
