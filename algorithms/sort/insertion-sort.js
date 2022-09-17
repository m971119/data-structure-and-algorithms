// Insert item to the previos sorted list
// Very efficient when sorting "almost sorted list" --> O(n) or even O(1)
// Worst -  T: O(n^2), S: O(1)
// Best - T: O(n)
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            // move number to the first position
            console.log('moving', arr[i], 'to the first spot');
            arr.unshift(arr.splice(i, 1)[0]);
        } else {
            for (let j = 1; j < i; j++) {
                if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
                    // move number to the right spot
                    console.log('arr.splice(', j, ',', 0, ',', arr[i]);
                    arr.splice(j, 0, arr.splice(i, 1)[0]);
                }
            }
        }
        
    }
    return arr;
}

console.log(insertionSort([3, 2, 1]));
console.log(insertionSort([99, 44, 6, 3, 2, 87, 2000]));

let arrTemp = [1, 2, 3];
console.log(

)