// Divide And Conquer
// T: O(nlogn), S: O(n) --> Bigger Space Complexity
// You may never need to implement it in an interview, 
// but you may have to answer how it works
// A "stable" sorting algo - (what is stable sort? ans: https://stackoverflow.com/questions/1517793/what-is-stability-in-sorting-algorithms-and-why-is-it-important)

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // Split array to right and left
    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    // console.log('left: ', left);
    // console.log('right: ', right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // console.log('------- merging ---------');
    // console.log(left)
    // console.log('and');
    // console.log(right);
    // console.log('result', result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)));
    // console.log('-------------------------');
    return result.concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}



console.log(mergeSort([2, 34, 99, 101, 3, 57, 9, 11, 31]));