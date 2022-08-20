// 10 ---> 5 ---> 16

let simpleLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newTailNode = {
      value: value,
      next: null,
    };
    this.tail.next = newTailNode;
    this.tail = newTailNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newHead = {
      value: value,
      next: this.head
    }
    this.head = newHead;
    this.length++;
    return this;
  }

  // 10 ---> 5 ---> 16 ---> 3

  insert(index, value) {
    // check length
    if (this.length <= index) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    const newNode = {
      value: value,
      next: null
    };
    /*
    // My Solution
    let currentNode = this.head;
    let nextNode = this.head.next;
    for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
        nextNode = nextNode.next;
    }
    currentNode.next = newNode;
    newNode.next = nextNode;
    */
    // Teacher's solution
    const currentNode = this.traverseToIndex(index - 1);
    const nextNode = leader.next;
    currentNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    // check params
    if (index >= this.length) {
      index = this.length - 1;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    const leaderNode = this.traverseToIndex(index - 1);
    const unwantedNode = leaderNode.next;
    leaderNode.next = unwantedNode.next;
    this.length--;
    return this;
  }
}

// some might implement node as a class

// 1 -> 10 -> 16
const myLinkedList = new SinglyLinkedList(10);
myLinkedList.prepend(1);
myLinkedList.append(16);
myLinkedList.insert(0, 17);
myLinkedList.insert(9, 111);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.remove(0);
myLinkedList.printList();