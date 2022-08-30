// BinarySearchTree: lookup, insert, delete --> O(logN)
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        /*
        // My solution: 空間利用較差
        const DIRECTION_RIGHT = 'right';
        const DIRECTION_LEFT = 'left';
        let currentNode = this.root;
        let lastNode = null;
        let direction = null;
        while (currentNode !== null) {
            lastNode = currentNode;
            if (newNode.value > currentNode.value) {
                currentNode = currentNode.right;
                direction = DIRECTION_RIGHT;
            } else {
                currentNode = currentNode.left;
                direction = DIRECTION_LEFT;
            }
        }
        lastNode[direction] = newNode;
        */
        // Teacher's solution
        let currentNode = this.root;
        while(true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
        return this;
    }
    lookup(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }
            if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }
        return false;
    }
    // TODO:
    remove(value) {

    }
}


const myTree = new BinarySearchTree();
myTree.insert(5);
myTree.insert(7);
myTree.insert(3);
myTree.insert(15);

printTree(myTree);

console.log(myTree.lookup(100));
console.log(myTree.lookup(15));


function traverse(node) {
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

function printTree(tree) {
    return console.log(JSON.stringify(traverse(tree.root), null, 2));
}