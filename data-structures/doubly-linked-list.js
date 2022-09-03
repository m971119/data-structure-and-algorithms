// 10 ---> 5 ---> 16
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            previous: null,
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    
    append(value) {
        const newTailNode = {
            previous: null,
            value: value,
            next: null
        };
        newTailNode.previous = this.tail;
        this.tail.next = newTailNode;
        this.tail = newTailNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newHead = {
            previous: null,
            value: value,
            next: null,
        }
        this.head.previous = newHead;
        newHead.next = this.head;
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
            previos:null,
            value: value,
            next: null
        };
        const currentNode = this.traverseToIndex(index - 1);
        const nextNode = leader.next;
        currentNode.next = newNode;
        newNode.previous = currentNode;
        newNode.next = nextNode;
        nextNode.previous = newNode;
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
        this.head.previous = null;
        this.length--;
        return this;
      }
      const leaderNode = this.traverseToIndex(index - 1);
      const unwantedNode = leaderNode.next;
      leaderNode.next = unwantedNode.next;
      unwantedNode.previous = leaderNode;
      this.length--;
      return this;
    }
}

// some might implement node as a class

// 1 -> 10 -> 16
const myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList.prepend(1));

myLinkedList.append(16);
myLinkedList.insert(0, 17);
myLinkedList.insert(9, 111);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.remove(0);
console.log(myLinkedList);
myLinkedList.printList();