class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const item = new Node(value);
    this.length++;
    if (this.head === null) {
      this.head = item;
      this.tail = this.head;
      return;
    }
    item.prev = this.tail;
    this.tail.next = item;
    this.tail = item;
  }

  prepend(value) {
    const item = new Node(value);
    this.length++;
    item.next = this.head;
    this.head.prev = item;
    this.head = item;
    if (item.next === null) {
      this.tail = this.head;
    }
  }

  insert(index, value) {
    if (index < 1) {
      return this.prepend(value);
    }
    else if(index >= this.length) {
      return this.append(value);
    }
    const item = new Node(value);
    this.length++;
    let pre = this.head;
    for (let i = 1; i < index; i++) {
      pre = pre.next;
    }
    item.next = pre.next;
    pre.next.prev = item;
    pre.next = item;
    item.prev = pre;
  }

  remove(index) {
    this.length--;
    let pre = this.head;
    for (let i = 1; i < index; i++) {
      pre = pre.next;
    }
    pre.next = pre.next.next;
    pre.next.prev = pre;
  }

  display() {
    let item = this.head;
    while (item) {
      console.log(item.value);
      item = item.next;
    }
  }
}
