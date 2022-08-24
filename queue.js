// Queues
// Implement it with LinkedLists (not Arrays)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
      return this.first;  
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return this;
        }
        this.first = this.first.next;
        this.length--;
        if (this.length === 0) {
            this.last = null;
        }
        return this;
    }

    printQueue() {
        const array = [];
        let currentNode = this.first;
        while (currentNode != null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
        }
        console.log(array);
      }
}

const myQueue = new Queue();
myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
myQueue.printQueue();