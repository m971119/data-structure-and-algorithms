// Select the minimum item and place it at the beginning index
// Time: O(n^2) Space: O(1)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                // console.log('min changed from', arr[min],  'to ' + arr[j]);
                min = j;
            }
        }
        // swap the smallest item with the beginning item
        if (i !== min) {
            const temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([3, 2, 1]));
console.log(selectionSort([99, 44, 6, 3, 2, 87, 2000]));