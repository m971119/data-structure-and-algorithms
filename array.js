const strings = ['a', 'b', 'c', 'd'];


// push - O(1)
strings.push('e');

// pop - O(1)
strings.pop();
strings.pop();

// unshift - O(n)
strings.unshift('x'); // [ 'x', 'a', 'b', 'c' ]

// splice - O(n)
strings.splice(2, 0, 'alien'); // [ 'x', 'a', 'alien', 'b', 'c' ]

console.log(strings);

/** 
 * Static Arrays & Dynamic Arrays 
 * 1. Static Array - you define the array size at first
 *    - C++ : int a[20]; --> static
 * 2. Dynamic Array - js arrays
 * 
 * - For "append(), push()", static arrays take O(n) time, since you have take the whole array items and relocate them again
 *   dynamic arrays take O(1)
 */

 class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    
    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        // delete the last item in the array
        delete this.data[this.length - 1];
        this.length--;
    }

    reverse() {
        const result = [];
        for (let i = this.length - 1; i = 0; i--) {
            result.push(this.data[i]);
        }
        return result;
    }
}

const newArr = new MyArray();

console.log(newArr.push('hi'));
console.log(newArr.push('there'));
console.log(newArr.push('!'));
console.log(newArr.pop());
console.log(newArr.push('you'));
console.log(newArr.delete(2));
console.log(newArr);

/**
 * Strings ARE Arrays!
 */

function reverse(str) {
    // check input
    if (
        !str || 
        str.length < 2 || 
        typeof str !== 'string'
    ) {
        return 'Invalid input';
    }
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverse("hi a hdafda"));

function reverse2(str) {
    return str.split('').reverse().join();
}

console.log(reverse("hi a ghauhfd"));

const reverse3 = str => [...str].reverse().join('');

console.log(reverse3("afhadjkfhdajkfh"));


/** Merge Sorted Arrays */
function mergeSortedArrays(array1, array2) {
    // Check Input
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    const mergeedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergeedArray.push(array1Item);
            array1Item = array1[i];
            i++
        } else {
            mergeedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergeedArray;
}

console.log(mergeSortedArrays([1, 2, 3, 4], [2, 3, 4]));