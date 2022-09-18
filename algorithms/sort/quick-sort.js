// Divide and Conquer
// Space Complexity O(logn) better than merge sort O(n)
// Worst case Time Complexity O(n^2) worse than merge sort O(nlogn) (worst case 
//      happens when your pivot is the largest / smallest number of the list)

// Quick Sort is averagely the best sorting algo, but has a nasty worst case

// choose a pivot and compare everyone else, till the pivot is inplace
// then divide the list by the pivot and continue the process


function quickSort(array, left, right) {
    const len  = array.length;
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }

    return array;
}

function partition(array, pivot, left, right) {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);