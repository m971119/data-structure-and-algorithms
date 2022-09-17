// We bubble up the largest number
// the least efficient algo
// Time: O(n^2) Space: O(1)
function bubbleSort(arr) {
    for (let max = arr.length - 1; max > 0; max--) {
        for (i = 0; i < max; i++) {
            if (arr[i] > arr[i+1]) {
                // console.log(max, 'swapping ' + arr[i] + ' and ' + arr[i+1]);
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([99, 44, 6, 3, 2, 87, 2000]));