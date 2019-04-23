class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    this.tail.next = item;
    this.tail = item;
  }

  prepend(value) {
    const item = new Node(value);
    this.length++;
    item.next = this.head;
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
    pre.next = item;
  }

  remove(index) {
    this.length--;
    let pre = this.head;
    for (let i = 1; i < index; i++) {
      pre = pre.next;
    }
    pre.next = pre.next.next;
  }

  reverse() {
    if(this.length < 2) {
      return;
    }
    let pre = this.head;
    let aft = pre.next;
    while(aft) {
      let temp = aft.next;
      aft.next = pre;
      pre = aft;
      aft = temp;
    }
    this.head.next = null;
    this.tail = this.head;
    this.head = pre;
  }

  display() {
    let item = this.head;
    while (item) {
      console.log(item.value);
      item = item.next;
    }
  }
}
