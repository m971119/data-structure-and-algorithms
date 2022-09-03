// Stocks
// Implement it with LinkedLists
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        // see the very top element
        if (this.length == 0) {
            return null;
        }
        return this.top.value;

    }

    push(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }
        this.top = this.top.next;
        this.length--;
        if (this.length === 0) {
            this.bottom = null;
        }
        return this;
    }
    
    printStack() {
      const array = [];
      let currentNode = this.top;
      while (currentNode != null) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
      }
      console.log(array);
    }
}

const myStack = new Stack();
myStack.push('Discord');
myStack.push('google');
myStack.push('hi');
myStack.printStack();
console.log(myStack.pop());
myStack.printStack();
console.log(myStack.peek());
myStack.printStack();
console.log(myStack.pop());
myStack.printStack();
console.log(myStack.pop());
myStack.printStack();

// Implement Stack by array
class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        if (this.array.length === 0) {
            return null;
        }
        return this.array[this.array.length - 1];
    }

    push() {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}
