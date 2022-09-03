/** Hash tables 
* JS objects only allow string keys, every other type of key will be stringified
* Map() allows different data type keys, e.g. function!
*/

// ES6
// const a = new Map();
// const b = new Set();

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (!currentBucket) {
            return undefined;
        }   
        for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] == key) {
                return currentBucket[i][1];
            }
        }
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}



const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 200);
myHashTable.set('oranges', 1);
console.log(myHashTable.keys());



/** usage of hash tables */

function firstRecurringChar(array) {
    const lookup = {};
    for (let item of array) {
        if (lookup[item]) {
            return item;
        } else {
            lookup[item] = true;
        }
        console.log(lookup);
    }
    return undefined;
}

console.log(firstRecurringChar([1, 2, 3, 4, 1]));